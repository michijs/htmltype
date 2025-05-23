/// <reference lib="esNext" />
// TODO: fix this

import type { IAttributeData } from "vscode-html-languageservice";
import type { InterfaceFactory, ValueSetInterfaceFactory } from "./types";
import { allAttributes } from "./TypesFactory";
import { generateDocumentation } from "vscode-html-languageservice/lib/esm/languageFacts/dataProvider";

export const getPropertyName = (property: string | number) =>
  /-|.:/.test(property.toString()) ? `["${property}"]` : property;

export const DEFAULT_VALUE_SET = {
  key: "default",
  value: ["string", "number", "boolean", "null"],
};

export const getExtends = (
  factory: InterfaceFactory | ValueSetInterfaceFactory,
) => {
  const pickText: string[] =
    factory.extends.pickFromAllAttributes.length > 0
      ? [
          `Pick<${
            allAttributes.name
          }, "${factory.extends.pickFromAllAttributes.join('" | "')}">`,
        ]
      : [];
  const interfaceExtends = [...pickText, ...factory.extends.otherClasses];
  return interfaceExtends.length > 0
    ? `extends ${interfaceExtends.join(", ")} `
    : "";
};

export const getJSDoc = (attr: IAttributeData) => {
  const docs = generateDocumentation(attr, undefined, true);
  if (docs?.kind === "markdown" && docs.value)
    return `\n/**\n${docs.value}\n*/\n`;
  return "";
};

export const getAttributes = (factory: InterfaceFactory) =>
  factory.attributes.length > 0
    ? `
  ${factory.attributes
    .sort(sortByName)
    .map(
      (attr: IAttributeData) =>
        `${getJSDoc(attr)}${getPropertyName(attr.name)}${
          factory.requiredAttributes ? "" : "?"
        }: ${
          attr.valueSet
            ? `ValueSets['${attr.valueSet}']`
            : attr.values?.map((x) => x.name).join(" | ")
        };`,
    )
    .join("\n")}
    `
    : "";
export const sortByName = (a: { name: string }, b: { name: string }) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase());

export const generateInterface = (factory: InterfaceFactory) =>
  `${factory.export ? "export " : ""}interface ${factory.name}${
    factory.generics ? `<${factory.generics}>` : ""
  } ${getExtends(factory)}{${getAttributes(factory)}}`;
