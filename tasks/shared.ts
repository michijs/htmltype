/// <reference lib="esNext" />
// TODO: fix this
import { JSDocInfo, MarkupContent } from "./types";

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
