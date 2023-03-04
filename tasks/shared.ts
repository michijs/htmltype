import {
  JSDocInfo,
  MarkupContent,
} from "./types";

const getReferences =
  (
    currentValue: JSDocInfo,
  ) =>
    currentValue.references &&
    currentValue
      .references
      .length >
      0
      ? `* ${currentValue.references?.map(
          (
            x,
          ) => `
* [${x.name}] {@link ${x.url}}`,
        )}`
      : "";

export const getJSDoc =
  (
    currentValue: JSDocInfo,
  ) =>
    currentValue?.description ||
    currentValue.references
      ? `/**
* ${(
          (
            currentValue?.description as MarkupContent
          )
            ?.value ??
          currentValue?.description ??
          ""
        ).replace(
          "🧧 *Provide by SVG extension.*\n\n",
          "",
        )}
${getReferences(
  currentValue,
)}*/`
      : "";
export const getPropertyName =
  (
    property: string,
  ) =>
    /-|.:/.test(
      property,
    )
      ? `["${property}"]`
      : property;

export const DEFAULT_VALUE_SET =
  {
    key: "default",
    value:
      "string | number",
  };
