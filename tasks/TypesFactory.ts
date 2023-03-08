import { appendFileSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { DEFAULT_VALUE_SET, getJSDoc, getPropertyName } from "./shared";
import { Attribute, Documentation, ITag, JSDocInfo } from "./types";

interface AttributeType extends Omit<JSDocInfo, "name"> {
  valueSets: Set<string>;
}
interface ElementType extends Omit<JSDocInfo, "name"> {
  types: string[];
}

interface AddTypesFromProps {
  attributesAlias?: Record<string, string[]>;
  name: string;
  documentationSrc: Documentation;
  src: string;
  additionalImports?: string[];
  notSupportedTags?: string[];
  getAdditionalElementAttributes?: (tag: string) => string[];
  getAttributes?: (tag: ITag) => ITag["attributes"];
}

export class TypesFactory {
  valueSets = new Map<string | number, string[]>();
  private attributes = new Map<string, AttributeType>();

  constructor() {
    rmSync("./src/generated", { recursive: true, force: true });
    rmSync("./supported", { recursive: true, force: true });
    mkdirSync("./supported");
    mkdirSync("./src/generated");
    writeFileSync(
      "./src/generated/index.ts",
      `export type { ValueSets } from "./ValueSets";
export type { AllAttributes } from "./AllAttributes";\n`,
    );
  }

  getValueSet = (property: Attribute) => {
    if (property.name === "style") return "CSSProperties";
    if (property.valueSet) return `ValueSets['${property.valueSet}']`;
    if (property.values) {
      const newValueSet = property.values.map((x) => `"${x.name}"`);
      const valueSetIndexFound = Array.from(this.valueSets.keys()).find(
        (key) => newValueSet.every((y) => this.valueSets.get(key)?.includes(y)),
      );
      if (!valueSetIndexFound) {
        const newValueSetIndex =
          this.valueSets.set(this.valueSets.size, newValueSet).size - 1;
        return `ValueSets['${newValueSetIndex}']`;
      }
      return `ValueSets['${valueSetIndexFound}']`;
    }
    return `ValueSets['${DEFAULT_VALUE_SET.key}']`;
  };

  addAttributes(attributes: Attribute[]) {
    attributes.forEach((x) => {
      const attributeFound = this.attributes.get(x.name);
      const newValueSet = this.getValueSet(x);

      if (attributeFound) {
        attributeFound.valueSets.add(newValueSet);
        if (attributeFound.valueSets.size > 1)
          attributeFound.valueSets.delete(
            `ValueSets['${DEFAULT_VALUE_SET.key}']`,
          );
      } else
        this.attributes.set(x.name, {
          description: x.description,
          references: x.references,
          valueSets: new Set([newValueSet]),
        });
    });
  }

  addTypesFrom(props: AddTypesFromProps) {
    const elements = new Map<string, ElementType>();
    this.valueSets.set(DEFAULT_VALUE_SET.key, DEFAULT_VALUE_SET.value);
    if (props.documentationSrc.valueSets) {
      props.documentationSrc.valueSets.forEach((x) => {
        this.valueSets.set(
          x.name,
          x.values
            .filter((x) => x.name !== "undefined")
            .map((x) => `"${x.name}"`),
        );
      });
    }
    props.documentationSrc.tags
      .filter((x) => !props.notSupportedTags?.includes(x.name))
      .forEach((x) => {
        const attributes = props.getAttributes?.(x) ?? x.attributes;
        this.addAttributes(attributes);
        let attributesPick = attributes.map((x) => x.name);
        const attributesAliases = new Array<string>();

        if (props.attributesAlias)
          Object.entries(props.attributesAlias).forEach(
            ([alias, attributesInAlias]) => {
              if (attributesInAlias.every((x) => attributesPick.includes(x))) {
                attributesPick = attributesPick.filter(
                  (x) => !attributesInAlias.includes(x),
                );
                attributesAliases.push(alias);
              }
            },
          );

        const types = props.getAdditionalElementAttributes?.(x.name) ?? [];

        if (attributesPick.length > 0)
          types.push(
            `Pick<AllAttributes, ${attributesPick
              .map((x) => `"${x}"`)
              .join("|")}>`,
          );
        if (attributesAliases.length > 0) types.push(...attributesAliases);

        elements.set(x.name, {
          description: x.description,
          references: x.references,
          types,
        });
      });

    writeFileSync(
      `./supported/${props.name}.json`,
      JSON.stringify(Array.from(elements.keys()), null, 2),
    );
    writeFileSync(
      `./src/generated/${props.name}.ts`,
      `// file generated from ${props.src}
       // Data Version ${props.documentationSrc.version})
       import { AllAttributes } from './AllAttributes';
       ${props.additionalImports?.join("\n")}
       ${
         props.attributesAlias
           ? `\n\n${Object.entries(props.attributesAlias)
                .map(
                  ([key, value]) =>
                    `type ${key} = Pick<AllAttributes, ${value
                      .map((x) => `"${x}"`)
                      .join("|")}>;`,
                )
                .join("\n")}`
           : ""
       }
       export interface ${props.name} {
         ${Array.from(elements.entries())
           .sort((a, b) => {
             if (a[0] > b[0]) {
               return 1;
             }
             if (a[0] < b[0]) {
               return -1;
             }
             // a must be equal to b
             return 0;
           })
           .map(
             ([key, value]) =>
               `${getJSDoc({ name: key, ...value })}${getPropertyName(
                 key,
               )}: ${value.types.join(" & ")};`,
           )
           .join("\n")}
       }
       `,
    );
    appendFileSync(
      "./src/generated/index.ts",
      `export * from "./${props.name}";\n`,
    );
  }

  generateAttributesAndValueSets() {
    writeFileSync(
      "./src/generated/AllAttributes.ts",
      `import { ValueSets } from "./ValueSets"
      import { CSSProperties } from '../types'
      export interface AllAttributes {
        ${Array.from(this.attributes.entries())
          .sort((a, b) => {
            if (a[0] > b[0]) {
              return 1;
            }
            if (a[0] < b[0]) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
          .map(
            ([key, value]) =>
              `${getJSDoc({ name: key, ...value })}${getPropertyName(
                key,
              )}?: ${Array.from(value.valueSets.values()).join(" | ")};`,
          )
          .join("\n")}
      }`,
    );
    writeFileSync(
      "./src/generated/ValueSets.ts",
      `export interface ValueSets {
        ${Array.from(this.valueSets.entries())
          .map(
            ([name, value]) =>
              `${getPropertyName(name)}: ${value.join(" | ")};`,
          )
          .join("\n")}
      }`,
    );
  }
}
