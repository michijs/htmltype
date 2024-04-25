import { appendFileSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { DEFAULT_VALUE_SET, generateInterface, sortByName } from "./shared";
import type { IAttributeData } from "vscode-html-languageservice";
import type {
  AddTypesFromProps,
  AttributeSet,
  GenerateAttributesAndValueSetsProps,
  InterfaceFactory,
  TypesFactoryProps,
  ValueSetInterfaceFactory,
} from "./types";

const getInterfaceHelperName = (
  props: AddTypesFromProps,
  elementName: string,
) =>
  `${props.name.slice(0, -8)}${elementName
    .charAt(0)
    .toUpperCase()}${elementName.slice(1)}Attributes`;

export const valueSets: ValueSetInterfaceFactory = {
  name: "ValueSets",
  export: true,
  extends: {
    pickFromAllAttributes: [],
    otherClasses: [],
  },
  attributes: [
    {
      name: DEFAULT_VALUE_SET.key,
      values: DEFAULT_VALUE_SET.value.map((x) => ({
        name: x,
      })),
    },
    // Because of HTML types
    {
      name: "v",
      values: [{ name: "boolean" }],
    },
    {
      name: "style",
      values: [{ name: "CSSProperties" }],
    },
  ],
};
export const allAttributes: InterfaceFactory = {
  name: "AllAttributes",
  export: true,
  extends: {
    pickFromAllAttributes: [],
    otherClasses: [],
  },
  attributes: [],
};

export class TypesFactory {
  generatedPath: string;
  constructor(props?: TypesFactoryProps) {
    this.generatedPath = props?.generatedPath ?? "./src/generated";
    rmSync(this.generatedPath, { recursive: true, force: true });
    rmSync("./supported", { recursive: true, force: true });
    mkdirSync("./supported");
    writeFileSync("./supported/index.js", "");
    mkdirSync(this.generatedPath);
    writeFileSync(
      `${this.generatedPath}/index.ts`,
      `export type { ValueSets } from "./ValueSets";
export type { AllAttributes } from "./AllAttributes";\n`,
    );
  }

  getValueSet = (property: IAttributeData) => {
    if (property.name === "style") return "style";
    let valueSetKey = DEFAULT_VALUE_SET.key;
    if (property.valueSet) valueSetKey = property.valueSet;
    else if (property.values && property.values.length > 0) {
      const newValueSet = property.values.map((x) => ({
        ...x,
        name: `"${x.name}"`,
      }));
      const valueSetIndexFound = valueSets.attributes?.find(
        (attribute) =>
          attribute.values?.length === newValueSet.length &&
          newValueSet.every((y) =>
            attribute.values?.map((x) => x.name).includes(y.name),
          ),
      );
      if (valueSetIndexFound) valueSetKey = valueSetIndexFound.name;
      else {
        valueSetKey = (valueSets.attributes?.length ?? 0).toString();
        valueSets.attributes?.push({
          name: valueSetKey,
          values: newValueSet,
        });
      }
    }
    return valueSetKey;
  };

  addAttributes(
    el: InterfaceFactory,
    attributes: IAttributeData[],
    attributeSets?: AttributeSet,
  ) {
    // Attribute sets
    let filteredAttributes = attributes;
    if (attributeSets)
      Object.entries(attributeSets).forEach(([name, attributeSet]) => {
        const containsAttributeSet = attributeSet.every((attr) =>
          attributes.find(
            (x) =>
              x.name === attr.name &&
              (x.valueSet ?? this.getValueSet(x)) ===
                (attr.valueSet ?? this.getValueSet(attr)),
          ),
        );

        if (containsAttributeSet) {
          const attributeSetMap = attributeSet.map((x) => x.name);
          el.extends.otherClasses.push(name);
          filteredAttributes = filteredAttributes.filter(
            (attr) => !attributeSetMap.includes(attr.name),
          );
        }
      });
    // Removing events
    filteredAttributes
      .filter((x) => !x.name.startsWith("on"))
      .forEach((attribute) => {
        const attributeFound = allAttributes.attributes?.find(
          (x) => attribute.name === x.name,
        );
        const newValueSet = this.getValueSet(attribute);
        const newAttribute: InterfaceFactory["attributes"][number] = {
          ...attribute,
          valueSet: newValueSet,
        };

        // Attribute was added before to AllAttributes
        if (attributeFound) {
          const isSameValueSet = attributeFound.valueSet === newValueSet;
          // If its the same I get the data from all attributes
          if (isSameValueSet)
            el.extends.pickFromAllAttributes.push(newAttribute.name);
          // If is not the same value set I add the attribute to the interface
          else el.attributes.push(newAttribute);
        } else {
          // If the attribute was not found on AllAttributes I add the value
          allAttributes.attributes?.push(newAttribute);
          el.extends.pickFromAllAttributes.push(newAttribute.name);
        }
      });
  }

  async addTypesFrom(props: AddTypesFromProps) {
    const elementsInterfaces: InterfaceFactory[] = [];

    // Default value sets
    if (props.documentationSrc.valueSets) {
      valueSets.attributes.push(
        ...props.documentationSrc.valueSets
          .filter((x) => x.name !== "undefined")
          .map((x) => ({
            ...x,
            values: x.values.map((y) => ({
              ...y,
              name: `"${y.name}"`,
            })),
          })),
      );
      // Removing repeated attributes
      // TODO: if values are different add with |
      valueSets.attributes = [
        ...new Map(valueSets.attributes.map((m) => [m.name, m])).values(),
      ];
    }
    const attributeSets: InterfaceFactory[] | undefined = props.attributeSet
      ? Object.entries(props.attributeSet).map(([name, attributeSet]) => {
          const attributeSetInterface = {
            name,
            extends: {
              pickFromAllAttributes: [],
              otherClasses: [],
            },
            attributes: [],
          };
          this.addAttributes(attributeSetInterface, attributeSet);
          return attributeSetInterface;
        })
      : undefined;
    // Elements
    const elements: InterfaceFactory = {
      name: props.name,
      export: true,
      generics: "I extends {} = {}",
      requiredAttributes: true,
      extends: {
        pickFromAllAttributes: [],
        otherClasses: [],
      },
      attributes: props.documentationSrc.tags!.map((x) => ({
        ...x,
        // Element interface is the only value
        values: [getInterfaceHelperName(props, x.name)].map((name) => ({
          name: `${name}<I>`,
        })),
      })),
    };

    let globalAttributes: InterfaceFactory | undefined;
    // Global attributes
    if (props.documentationSrc.globalAttributes) {
      globalAttributes = {
        name: "GlobalAttributes",
        extends: {
          pickFromAllAttributes: [],
          otherClasses: [],
        },
        attributes: [],
      };
      this.addAttributes(
        globalAttributes,
        props.documentationSrc.globalAttributes,
      );
    }

    // tags
    props.documentationSrc.tags!.forEach((x) => {
      const elementInterface: InterfaceFactory = {
        name: getInterfaceHelperName(props, x.name),
        export: true,
        generics: "I extends Record<string, {}>",
        extends: {
          pickFromAllAttributes: [],
          otherClasses:
            props.getAdditionalElementExtendsInterfaces?.(
              x.name,
              props.getElementInterface(x.name),
            ) ?? [],
        },
        attributes: [],
      };
      this.addAttributes(elementInterface, x.attributes, props.attributeSet);

      if (globalAttributes)
        elementInterface.extends.otherClasses.push(globalAttributes.name);
      elementsInterfaces.push(elementInterface);
    });

    // JSON with supported elements and their interfaces
    writeFileSync(
      `./supported/${props.name}.json`,
      JSON.stringify(
        props.documentationSrc.tags?.map((el) => ({
          tagName: el.name,
          elementInterface: props.getElementInterface(el.name),
        })),
        null,
        2,
      ),
    );
    appendFileSync(
      "./supported/index.js",
      `exports.supported${props.name} = require("./${props.name}.json");\n`,
    );
    const srcVersion = (await import(`${props.src}/package.json`)).version;
    // Elements file
    writeFileSync(
      `${this.generatedPath}/${props.name}.ts`,
      `// file generated from ${props.src} ${srcVersion}
       // HTML Data Version ${props.documentationSrc.version}
       import type { AllAttributes } from './AllAttributes';
       import type { ValueSets } from "./ValueSets"
       ${props.additionalImports?.join("\n")}
       ${globalAttributes ? generateInterface(globalAttributes) : ""}
       ${
         attributeSets && attributeSets.length > 0
           ? attributeSets
               .sort(sortByName)
               .map((x) => generateInterface(x))
               .join("\n")
           : ""
       }
       ${elementsInterfaces
         .sort(sortByName)
         .map((x) => generateInterface(x))
         .join("\n")}
       ${generateInterface(elements)}`,
    );
    appendFileSync(
      `${this.generatedPath}/index.ts`,
      `export * from "./${props.name}";\n`,
    );
  }

  generateAttributesAndValueSets(props?: GenerateAttributesAndValueSetsProps) {
    // Attributes
    writeFileSync(
      `${this.generatedPath}/AllAttributes.ts`,
      `import type { ValueSets } from "./ValueSets"
      ${generateInterface(allAttributes)}`,
    );
    props?.valueSetsTransformer?.(valueSets);
    // ValueSets
    writeFileSync(
      `${this.generatedPath}/ValueSets.ts`,
      `import type { CSSProperties } from '../types';
      ${props?.valueSetsAdditionalImports?.join("\n") ?? ""}
      ${generateInterface(valueSets)}`,
    );
  }
}
