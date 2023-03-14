import { TypesFactory } from "./TypesFactory";
import htmlData from "@vscode/web-custom-data/data/browsers.html-data.json";
import svgData from "@michijs/vscode-svg/dist/svg.json";
import svgAttributeSets from "@michijs/vscode-svg/dist/attributeSets.json";
import mathmlData from "@michijs/vscode-mathml/dist/mathml.json";

htmlData.tags.push(
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
  ] as any),
);

const factory = new TypesFactory();

factory.valueSets.set("v", ["boolean"]);

factory.addTypesFrom({
  name: "HTMLElements",
  src: "@vscode/web-custom-data NPM package",
  documentationSrc: htmlData,
  additionalImports: [
    'import { GlobalEvents, WindowEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getElementInterface: (el) =>
    ["param", "rb"].includes(el)
      ? "HTMLElement"
      : `HTMLElementTagNameMap['${el}']`,
  getAdditionalElementAttributes: (el, elementInterface) => {
    const attributeSets = [
      "DataGlobalAttributes",
      `GlobalEvents<${elementInterface}>`,
    ];
    if (el === "body") attributeSets.push(`WindowEvents<${elementInterface}>`);
    return attributeSets;
  },
});
factory.addTypesFrom({
  name: "MathMLElements",
  src: "github:michijs/vscode-mathml",
  documentationSrc: mathmlData,
  additionalImports: [
    'import { MathMLEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getElementInterface: () => "MathMLEvents",
  getAdditionalElementAttributes: (_el, elementInterface) => {
    return ["DataGlobalAttributes", elementInterface];
  },
});
factory.addTypesFrom({
  name: "SVGElements",
  src: "github:lishu/vscode-svg2",
  documentationSrc: svgData,
  attributesAlias: Object.entries(svgAttributeSets).reduce(
    (previousValue, [key, value]) => {
      previousValue[key] = value.map((x) => x.name);
      return previousValue;
    },
    {} as Record<string, string[]>,
  ),
  additionalImports: [
    'import { SVGEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getElementInterface: (el) =>
    ["discard"].includes(el) ? "SVGElement" : `SVGElementTagNameMap['${el}']`,
  getAdditionalElementAttributes: (_el, elementInterface) => {
    return ["DataGlobalAttributes", `SVGEvents<${elementInterface}>`];
  },
});
factory.generateAttributesAndValueSets();
