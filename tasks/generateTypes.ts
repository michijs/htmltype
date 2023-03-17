import { TypesFactory } from "./TypesFactory";
import htmlDataImport from "@vscode/web-custom-data/data/browsers.html-data.json";
import svgDataImport from "@michijs/vscode-svg/dist/svg.json";
import svgAttributeSet from "@michijs/vscode-svg/dist/attributeSets.json";
import mathmlDataImport from "@michijs/vscode-mathml/dist/mathml.json";
import { HTMLDataV1, ITagData } from "vscode-html-languageservice";
import { AttributeSet } from "./types";

let htmlData = htmlDataImport as HTMLDataV1;
const svgData = svgDataImport as HTMLDataV1;
const mathmlData = mathmlDataImport as HTMLDataV1;

htmlData.tags!.push(
  ...([
    {
      name: "slot",
      description:
        "The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.",
      attributes: [
        {
          name: "name",
        },
      ],
    },
    {
      name: "data",
      description:
        "The data element links a given piece of content with a machine-readable translation.",
      attributes: [
        {
          name: "value",
        },
      ],
    },
    {
      name: "hgroup",
      description:
        "The hgroup element represents a heading and related content. It groups a single h1–h6 element with one or more p.",
      attributes: [],
    },
    {
      name: "menu",
      description:
        "The menu element represents an unordered list of interactive items.",
      attributes: [],
    },
  ] as ITagData[]),
);

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

async function main() {
  const factory = new TypesFactory();

  await factory.addTypesFrom({
    name: "HTMLElements",
    src: "@vscode/web-custom-data",
    documentationSrc: htmlData,
    additionalImports: [
      'import { GlobalEvents, WindowEvents } from "../Events"',
      'import { DataGlobalAttributes } from "../types"',
    ],
    getElementInterface: (el) =>
      ["param", "rb"].includes(el)
        ? "HTMLElement"
        : `HTMLElementTagNameMap['${el}']`,
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => {
      const attributeSets = [
        "DataGlobalAttributes",
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
      'import { DataGlobalAttributes } from "../types"',
    ],
    getElementInterface: () => "MathMLElement",
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => [
      "DataGlobalAttributes",
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
      'import { DataGlobalAttributes } from "../types"',
    ],
    getElementInterface: (el) =>
      ["discard"].includes(el) ? "SVGElement" : `SVGElementTagNameMap['${el}']`,
    getAdditionalElementExtendsInterfaces: (el, elementInterface) => [
      "DataGlobalAttributes",
      `SVGEvents<I["${el}"] extends Element ? I["${el}"]: ${elementInterface}>`,
    ],
  });
  factory.generateAttributesAndValueSets();
}
main();
