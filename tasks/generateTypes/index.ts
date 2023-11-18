import { TypesFactory } from "./TypesFactory";
import htmlDataImport from "@vscode/web-custom-data/data/browsers.html-data.json";
import svgDataImport from "@michijs/vscode-svg/dist/svg.json";
import svgAttributeSet from "@michijs/vscode-svg/dist/attributeSets.json";
import mathmlDataImport from "@michijs/vscode-mathml/dist/mathml.json";
import type { HTMLDataV1 } from "vscode-html-languageservice";
import {
  AttributeSet,
  GenerateTypesProps,
  GetAdditionalElementExtendsInterfaces,
} from "./types";

const htmlData = htmlDataImport as HTMLDataV1;
const svgData = svgDataImport as HTMLDataV1;
const mathmlData = mathmlDataImport as HTMLDataV1;

htmlData.tags = htmlData.tags!.map((x) => {
  if (["bdo", "textarea"].includes(x.name))
    return {
      ...x,
      attributes: x.attributes.filter(
        (x) => x.name !== "dir" && x.name !== "spellcheck",
      ),
    };
  if (["button"].includes(x.name))
    return {
      ...x,
      attributes: x.attributes.map((x) =>
        x.name === "autocomplete"
          ? {
              ...x,
              valueSet: "o",
            }
          : x,
      ),
    };
  return x;
});

export async function generateTypes(props?: GenerateTypesProps) {
  const factory = new TypesFactory(props?.typesFactoryProps);

  const elementsAdditionalImports = [
    'import { DataGlobalAttributes } from "../DataGlobalAttributes"',
    ...(props?.elements?.additionalImports ?? []),
  ];
  const elementsAdditionalExtends: GetAdditionalElementExtendsInterfaces = (
    el,
    elementInterface,
  ) => [
    "DataGlobalAttributes",
    ...(props?.elements?.additionalExtends?.(el, elementInterface) ?? []),
  ];

  await factory.addTypesFrom({
    name: "HTMLElements",
    src: "@vscode/web-custom-data",
    documentationSrc: htmlData,
    additionalImports: [
      'import { GlobalEvents, WindowEvents } from "../Events"',
      ...elementsAdditionalImports,
    ],
    getElementInterface: (el) =>
      ["param", "rb"].includes(el)
        ? "HTMLElement"
        : `HTMLElementTagNameMap['${el}']`,
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => {
      const attributeSets = [
        ...elementsAdditionalExtends(el, elementInterface),
        `GlobalEvents<I["${el}"] extends Element ? I["${el}"]: ${elementInterface}>`,
      ];
      if (el === "body")
        attributeSets.push(
          `WindowEvents<I["${el}"] extends Element ? I["${el}"]: ${elementInterface}>`,
        );
      return attributeSets;
    },
  });
  await factory.addTypesFrom({
    name: "MathMLElements",
    src: "@michijs/vscode-mathml",
    documentationSrc: mathmlData,
    additionalImports: [
      'import { MathMLEvents } from "../Events"',
      ...elementsAdditionalImports,
    ],
    getElementInterface: () => "MathMLElement",
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => [
      ...elementsAdditionalExtends(el, elementInterface),
      `MathMLEvents<I["${el}"] extends Element ? I["${el}"]: ${elementInterface}>`,
    ],
  });
  await factory.addTypesFrom({
    name: "SVGElements",
    src: "@michijs/vscode-svg",
    documentationSrc: svgData,
    attributeSet: svgAttributeSet as AttributeSet,
    additionalImports: [
      'import { SVGEvents } from "../Events"',
      ...elementsAdditionalImports,
    ],
    getElementInterface: (el) =>
      ["discard"].includes(el) ? "SVGElement" : `SVGElementTagNameMap['${el}']`,
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => [
      ...elementsAdditionalExtends(el, elementInterface),
      `SVGEvents<I["${el}"] extends Element ? I["${el}"]: ${elementInterface}>`,
    ],
  });
  factory.generateAttributesAndValueSets(
    props?.generateAttributesAndValueSetsProps,
  );
}
