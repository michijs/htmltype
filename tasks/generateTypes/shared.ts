/// <reference lib="esNext" />
// TODO: fix this

import type { IAttributeData, MarkupContent } from "vscode-html-languageservice";
import { InterfaceFactory, JSDocInfo, ValueSetInterfaceFactory } from "./types";
import { allAttributes } from "./TypesFactory";

const getReferences = (currentValue: JSDocInfo) =>
  currentValue.references && currentValue.references.length > 0
    ? `* ${currentValue.references?.map(
        (x) => `
* [${x.name}] {@link ${x.url}}`,
      )}`
    : "";

const getDescription = (currentValue: JSDocInfo) => {
  const description = ((currentValue?.description as MarkupContent)?.value ??
    currentValue?.description) as string | undefined;
  return description ? `* ${description.replaceAll("\n", "\n* ")}` : "";
};

export const getJSDoc = (currentValue: JSDocInfo) =>
  currentValue?.description || currentValue.references
    ? `/**
${getDescription(currentValue)}${
  currentValue?.description && currentValue.references ? "\n" : ""
}${getReferences(currentValue)} */
`
    : "";

export const getPropertyName = (property: string | number) =>
  /-|.:/.test(property.toString()) ? `["${property}"]` : property;

export const DEFAULT_VALUE_SET = {
  key: "default",
  value: ["string", "number", "boolean"],
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

export const getAttributes = (
  factory: InterfaceFactory | ValueSetInterfaceFactory,
) =>
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

export const generateInterface = (
  factory: InterfaceFactory | ValueSetInterfaceFactory,
) =>
  `${factory.export ? "export " : ""}interface ${factory.name}${
    factory.generics ? `<${factory.generics}>` : ""
  } ${getExtends(factory)}{${getAttributes(factory)}}`;
