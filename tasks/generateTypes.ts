import { TypesFactory } from "./TypesFactory";
import htmlData from "@vscode/web-custom-data/data/browsers.html-data.json";
import svgData from "svg/html.html-data.json";
import mathmlData from "mathml/dist/mathml.json";

const factory = new TypesFactory();
htmlData.valueSets = htmlData.valueSets.filter((x) => x.name !== "u");

const globalAttributes = htmlData.globalAttributes.filter(
  (x) => !x.name.startsWith("on"),
);

factory.addAttributes(globalAttributes);
const htmlAttributesAlias = {
  GlobalAttributes: globalAttributes.map((x) => x.name),
};

const svgAttributeAlias = {
  SVGCoreAttributes: [
    "id",
    // 'lang',
    "tabindex",
    // 'xml:base',
    "xml:lang",
    "xml:space",
  ],
  StyleAttributes: ["style", "class"],
  // SVGConditionalProcessingAttributes: ['requiredExtensions', 'systemLanguage'],
  SVGPresentationAttributes: [
    "alignment-baseline",
    "baseline-shift",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    // enable-background
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    // "glyph-orientation-horizontal",
    // "glyph-orientation-vertical",
    "image-rendering",
    "kerning",
    "letter-spacing",
    "lighting-color",
    // "line-height",
    // "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "opacity",
    "overflow",
    // "paint-order",
    "pointer-events",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "transform",
    // "transform-origin",
    // "unicode-bidi",
    "vector-effect",
    "visibility",
    // "white-space",
    "word-spacing",
    "writing-mode",
  ],
  XLinkAttributes: [
    "xlink:href",
    // 'xlink:type',
    // 'xlink:role',
    // 'xlink:arcrole',
    "xlink:title",
    "xlink:show",
    // 'xlink:actuate'
  ],
  AnimationAttributeTargetAttributes: ["attributeType", "attributeName"],
  SVGFilterPrimitiveAttributes: ["x", "y", "height", "result", "width"],
  // SVGTransferFunctionAttributes: ['type',
  // 'tableValues',
  // 'intercept',
  // 'amplitude',
  // 'exponent'],
  SVGAnimationTimingAttributes: [
    "begin",
    "dur",
    "end",
    "min",
    "max",
    "restart",
    "repeatCount",
    "repeatDur",
    "fill",
  ],
  SVGAnimationAdditionAttributes: ["additive", "accumulate"],
  SVGAnimationValueAttributes: [
    "calcMode",
    "keyTimes",
    "keySplines",
    "from",
    "to",
    // 'by'
  ],
};

factory.addTypesFrom({
  name: "HTMLElements",
  src: "@vscode/web-custom-data NPM package",
  documentationSrc: htmlData,
  additionalImports: [
    'import { GlobalEvents, WindowEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getAdditionalElementAttributes: (el) => {
    const attributeSets = [
      "DataGlobalAttributes",
      `GlobalEvents<HTMLElementTagNameMap['${el}']>`,
      "GlobalAttributes",
    ];
    if (el === "body")
      attributeSets.push(`WindowEvents<HTMLElementTagNameMap['${el}']>`);
    return attributeSets;
  },
  attributesAlias: htmlAttributesAlias,
  notSupportedTags: ["rb", "param"],
});
factory.addTypesFrom({
  name: "MathMLElements",
  src: "github:michijs/vscode-mathml",
  documentationSrc: mathmlData,
  additionalImports: [
    'import { MathMLEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getAdditionalElementAttributes: () => {
    return ["DataGlobalAttributes", "MathMLEvents<MathMLElement>"];
  },
});
factory.valueSets.set("v", ["boolean"]);
factory.addTypesFrom({
  name: "SVGElements",
  src: "github:lishu/vscode-svg2",
  documentationSrc: svgData,
  attributesAlias: svgAttributeAlias,
  additionalImports: [
    'import { SVGEvents } from "../Events"',
    'import { DataGlobalAttributes } from "../types"',
  ],
  getAdditionalElementAttributes: (el) => {
    return ["DataGlobalAttributes", `SVGEvents<SVGElementTagNameMap['${el}']>`];
  },
  getAttributes(tag) {
    // Patch for transform not beign present on SVGPresentationAttributes
    if (tag.attributes.find((x) => x.name === "alignment-baseline"))
      if (!tag.attributes.find((x) => x.name === "transform"))
        tag.attributes.push({
          name: "transform",
        });
    // Patch for result not beign present on SVGFilterPrimitiveAttributes
    if (tag.attributes.find((x) => x.name === "x"))
      if (!tag.attributes.find((x) => x.name === "result"))
        tag.attributes.push({
          name: "result",
        });

    return tag.attributes;
  },
  notSupportedTags: [
    "animateColor",
    "color-profile",
    "discard",
    "font",
    "glyph",
    "hatch",
    "hatchpath",
  ],
});
factory.generateAttributesAndValueSets();
