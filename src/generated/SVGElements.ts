// file generated from @michijs/vscode-svg 2.0.6
// HTML Data Version 1.1
import { AllAttributes } from "./AllAttributes";
import { ValueSets } from "./ValueSets";
import { SVGEvents } from "../Events";
import { DataGlobalAttributes } from "../types";
type GlobalAttributes = Pick<
  AllAttributes,
  "class" | "id" | "lang" | "style" | "systemLanguage" | "tabindex"
>;
type AnimationAdditionAttributes = Pick<
  AllAttributes,
  "accumulate" | "additive"
>;
type AnimationAttributeTargetAttributes = Pick<
  AllAttributes,
  "attributeName" | "attributeType"
>;
type AnimationTargetElementAttributes = Pick<AllAttributes, "href">;
type AnimationTimingAttributes = Pick<
  AllAttributes,
  | "begin"
  | "dur"
  | "end"
  | "fill"
  | "max"
  | "min"
  | "repeatCount"
  | "repeatDur"
  | "restart"
>;
type AnimationValueAttributes = Pick<
  AllAttributes,
  "by" | "calcMode" | "from" | "keySplines" | "keyTimes" | "to" | "values"
>;
type AriaAttributes = Pick<
  AllAttributes,
  | "aria-activedescendant"
  | "aria-atomic"
  | "aria-autocomplete"
  | "aria-busy"
  | "aria-checked"
  | "aria-colcount"
  | "aria-colindex"
  | "aria-colspan"
  | "aria-controls"
  | "aria-current"
  | "aria-describedby"
  | "aria-details"
  | "aria-disabled"
  | "aria-dropeffect"
  | "aria-errormessage"
  | "aria-expanded"
  | "aria-flowto"
  | "aria-grabbed"
  | "aria-haspopup"
  | "aria-hidden"
  | "aria-invalid"
  | "aria-keyshortcuts"
  | "aria-label"
  | "aria-labelledby"
  | "aria-level"
  | "aria-live"
  | "aria-modal"
  | "aria-multiline"
  | "aria-multiselectable"
  | "aria-orientation"
  | "aria-owns"
  | "aria-placeholder"
  | "aria-posinset"
  | "aria-pressed"
  | "aria-readonly"
  | "aria-relevant"
  | "aria-required"
  | "aria-roledescription"
  | "aria-rowcount"
  | "aria-rowindex"
  | "aria-rowspan"
  | "aria-selected"
  | "aria-setsize"
  | "aria-sort"
  | "aria-valuemax"
  | "aria-valuemin"
  | "aria-valuenow"
  | "aria-valuetext"
  | "role"
>;
type FilterPrimitiveAttributes = Pick<
  AllAttributes,
  "height" | "result" | "width" | "x" | "y"
>;
interface PresentationAttributes
  extends Pick<
    AllAttributes,
    | "alignment-baseline"
    | "baseline-shift"
    | "clip-path"
    | "clip-rule"
    | "color"
    | "color-interpolation"
    | "color-interpolation-filters"
    | "color-profile"
    | "color-rendering"
    | "cursor"
    | "direction"
    | "dominant-baseline"
    | "fill"
    | "fill-opacity"
    | "fill-rule"
    | "filter"
    | "flood-color"
    | "flood-opacity"
    | "font-family"
    | "font-size"
    | "font-size-adjust"
    | "font-stretch"
    | "font-style"
    | "font-variant"
    | "font-weight"
    | "image-rendering"
    | "kerning"
    | "letter-spacing"
    | "lighting-color"
    | "marker-end"
    | "marker-mid"
    | "marker-start"
    | "mask"
    | "opacity"
    | "overflow"
    | "pointer-events"
    | "shape-rendering"
    | "stop-color"
    | "stop-opacity"
    | "stroke"
    | "stroke-dasharray"
    | "stroke-dashoffset"
    | "stroke-linecap"
    | "stroke-linejoin"
    | "stroke-miterlimit"
    | "stroke-opacity"
    | "stroke-width"
    | "text-anchor"
    | "text-decoration"
    | "text-rendering"
    | "transform"
    | "vector-effect"
    | "visibility"
    | "word-spacing"
    | "writing-mode"
  > {
  /**
   * The display attribute lets you control the rendering of graphical or container elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display} */
  display?: ValueSets["59"];
}
interface TransferFunctionAttributes
  extends Pick<
    AllAttributes,
    "amplitude" | "amplitude" | "exponent" | "intercept" | "tableValues"
  > {
  /**
   * Is a generic attribute and it has different meaning based on the context in which it's used.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type} */
  type?: ValueSets["75"];
}
export interface SVGAAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "amplitude"
      | "amplitude"
      | "download"
      | "exponent"
      | "hreflang"
      | "intercept"
      | "rel"
      | "tableValues"
      | "target"
      | "type"
    >,
    DataGlobalAttributes,
    SVGEvents<I["a"] extends Element ? I["a"] : SVGElementTagNameMap["a"]>,
    AnimationTargetElementAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {
  /**
   * Which referrer to send when fetching the URL.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/referrerpolicy} */
  referrerpolicy?: ValueSets["referrerpoliciy"];
}
export interface SVGAnimateAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["animate"] extends Element
        ? I["animate"]
        : SVGElementTagNameMap["animate"]
    >,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes,
    GlobalAttributes {}
export interface SVGAnimateMotionAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "keyPoints" | "path" | "rotate">,
    DataGlobalAttributes,
    SVGEvents<
      I["animateMotion"] extends Element
        ? I["animateMotion"]
        : SVGElementTagNameMap["animateMotion"]
    >,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes,
    GlobalAttributes {}
export interface SVGAnimateTransformAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["animateTransform"] extends Element
        ? I["animateTransform"]
        : SVGElementTagNameMap["animateTransform"]
    >,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes,
    GlobalAttributes {}
export interface SVGCircleAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cx" | "cy" | "pathLength" | "r">,
    DataGlobalAttributes,
    SVGEvents<
      I["circle"] extends Element ? I["circle"] : SVGElementTagNameMap["circle"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGClipPathAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "clipPathUnits">,
    DataGlobalAttributes,
    SVGEvents<
      I["clipPath"] extends Element
        ? I["clipPath"]
        : SVGElementTagNameMap["clipPath"]
    >,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGDefsAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["defs"] extends Element ? I["defs"] : SVGElementTagNameMap["defs"]
    >,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGDescAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["desc"] extends Element ? I["desc"] : SVGElementTagNameMap["desc"]
    >,
    GlobalAttributes {}
export interface SVGDiscardAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "begin">,
    DataGlobalAttributes,
    SVGEvents<I["discard"] extends Element ? I["discard"] : SVGElement>,
    AnimationTargetElementAttributes,
    GlobalAttributes {}
export interface SVGEllipseAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cx" | "cy" | "pathLength" | "rx" | "ry">,
    DataGlobalAttributes,
    SVGEvents<
      I["ellipse"] extends Element
        ? I["ellipse"]
        : SVGElementTagNameMap["ellipse"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeBlendAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "in" | "in2" | "mode">,
    DataGlobalAttributes,
    SVGEvents<
      I["feBlend"] extends Element
        ? I["feBlend"]
        : SVGElementTagNameMap["feBlend"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeColorMatrixAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feColorMatrix"] extends Element
        ? I["feColorMatrix"]
        : SVGElementTagNameMap["feColorMatrix"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeComponentTransferAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "in">,
    DataGlobalAttributes,
    SVGEvents<
      I["feComponentTransfer"] extends Element
        ? I["feComponentTransfer"]
        : SVGElementTagNameMap["feComponentTransfer"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeCompositeAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "in" | "in2" | "k1" | "k2" | "k3" | "k4" | "operator"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feComposite"] extends Element
        ? I["feComposite"]
        : SVGElementTagNameMap["feComposite"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeConvolveMatrixAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "bias"
      | "divisor"
      | "edgeMode"
      | "in"
      | "kernelMatrix"
      | "kernelUnitLength"
      | "order"
      | "preserveAlpha"
      | "targetX"
      | "targetY"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feConvolveMatrix"] extends Element
        ? I["feConvolveMatrix"]
        : SVGElementTagNameMap["feConvolveMatrix"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeDiffuseLightingAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "diffuseConstant" | "in" | "kernelUnitLength" | "surfaceScale"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feDiffuseLighting"] extends Element
        ? I["feDiffuseLighting"]
        : SVGElementTagNameMap["feDiffuseLighting"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeDisplacementMapAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feDisplacementMap"] extends Element
        ? I["feDisplacementMap"]
        : SVGElementTagNameMap["feDisplacementMap"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeDistantLightAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "azimuth" | "elevation">,
    DataGlobalAttributes,
    SVGEvents<
      I["feDistantLight"] extends Element
        ? I["feDistantLight"]
        : SVGElementTagNameMap["feDistantLight"]
    >,
    GlobalAttributes {}
export interface SVGFeDropShadowAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "dx" | "dy" | "in" | "stdDeviation">,
    DataGlobalAttributes,
    SVGEvents<
      I["feDropShadow"] extends Element
        ? I["feDropShadow"]
        : SVGElementTagNameMap["feDropShadow"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeFloodAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feFlood"] extends Element
        ? I["feFlood"]
        : SVGElementTagNameMap["feFlood"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeFuncAAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feFuncA"] extends Element
        ? I["feFuncA"]
        : SVGElementTagNameMap["feFuncA"]
    >,
    TransferFunctionAttributes,
    GlobalAttributes {}
export interface SVGFeFuncBAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feFuncB"] extends Element
        ? I["feFuncB"]
        : SVGElementTagNameMap["feFuncB"]
    >,
    TransferFunctionAttributes,
    GlobalAttributes {}
export interface SVGFeFuncGAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feFuncG"] extends Element
        ? I["feFuncG"]
        : SVGElementTagNameMap["feFuncG"]
    >,
    TransferFunctionAttributes,
    GlobalAttributes {}
export interface SVGFeFuncRAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feFuncR"] extends Element
        ? I["feFuncR"]
        : SVGElementTagNameMap["feFuncR"]
    >,
    TransferFunctionAttributes,
    GlobalAttributes {}
export interface SVGFeGaussianBlurAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "edgeMode" | "in" | "stdDeviation">,
    DataGlobalAttributes,
    SVGEvents<
      I["feGaussianBlur"] extends Element
        ? I["feGaussianBlur"]
        : SVGElementTagNameMap["feGaussianBlur"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeImageAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "preserveAspectRatio">,
    DataGlobalAttributes,
    SVGEvents<
      I["feImage"] extends Element
        ? I["feImage"]
        : SVGElementTagNameMap["feImage"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeMergeAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["feMerge"] extends Element
        ? I["feMerge"]
        : SVGElementTagNameMap["feMerge"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeMergeNodeAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "in">,
    DataGlobalAttributes,
    SVGEvents<
      I["feMergeNode"] extends Element
        ? I["feMergeNode"]
        : SVGElementTagNameMap["feMergeNode"]
    >,
    GlobalAttributes {}
export interface SVGFeMorphologyAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "in" | "operator" | "radius">,
    DataGlobalAttributes,
    SVGEvents<
      I["feMorphology"] extends Element
        ? I["feMorphology"]
        : SVGElementTagNameMap["feMorphology"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeOffsetAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "dx" | "dy" | "in">,
    DataGlobalAttributes,
    SVGEvents<
      I["feOffset"] extends Element
        ? I["feOffset"]
        : SVGElementTagNameMap["feOffset"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFePointLightAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "result" | "x" | "y" | "z">,
    DataGlobalAttributes,
    SVGEvents<
      I["fePointLight"] extends Element
        ? I["fePointLight"]
        : SVGElementTagNameMap["fePointLight"]
    >,
    GlobalAttributes {}
export interface SVGFeSpecularLightingAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "in"
      | "kernelUnitLength"
      | "specularConstant"
      | "specularExponent"
      | "surfaceScale"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feSpecularLighting"] extends Element
        ? I["feSpecularLighting"]
        : SVGElementTagNameMap["feSpecularLighting"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeSpotLightAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "limitingConeAngle"
      | "pointsAtX"
      | "pointsAtY"
      | "pointsAtZ"
      | "result"
      | "x"
      | "y"
      | "z"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feSpotLight"] extends Element
        ? I["feSpotLight"]
        : SVGElementTagNameMap["feSpotLight"]
    >,
    GlobalAttributes {}
export interface SVGFeTileAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "in">,
    DataGlobalAttributes,
    SVGEvents<
      I["feTile"] extends Element ? I["feTile"] : SVGElementTagNameMap["feTile"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGFeTurbulenceAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "baseFrequency" | "numOctaves" | "seed" | "stitchTiles"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["feTurbulence"] extends Element
        ? I["feTurbulence"]
        : SVGElementTagNameMap["feTurbulence"]
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {
  /**
   * Is a generic attribute and it has different meaning based on the context in which it's used.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type} */
  type?: ValueSets["84"];
}
export interface SVGFilterAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "filterUnits" | "primitiveUnits">,
    DataGlobalAttributes,
    SVGEvents<
      I["filter"] extends Element ? I["filter"] : SVGElementTagNameMap["filter"]
    >,
    FilterPrimitiveAttributes,
    GlobalAttributes {}
export interface SVGForeignObjectAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "height" | "width" | "x" | "y">,
    DataGlobalAttributes,
    SVGEvents<
      I["foreignObject"] extends Element
        ? I["foreignObject"]
        : SVGElementTagNameMap["foreignObject"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGGAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<I["g"] extends Element ? I["g"] : SVGElementTagNameMap["g"]>,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGImageAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "crossorigin" | "preserveAspectRatio">,
    DataGlobalAttributes,
    SVGEvents<
      I["image"] extends Element ? I["image"] : SVGElementTagNameMap["image"]
    >,
    AnimationTargetElementAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGLinearGradientAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "gradientTransform"
      | "gradientUnits"
      | "spreadMethod"
      | "x1"
      | "x2"
      | "y1"
      | "y2"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["linearGradient"] extends Element
        ? I["linearGradient"]
        : SVGElementTagNameMap["linearGradient"]
    >,
    AnimationTargetElementAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGLineAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "pathLength" | "x1" | "x2" | "y1" | "y2">,
    DataGlobalAttributes,
    SVGEvents<
      I["line"] extends Element ? I["line"] : SVGElementTagNameMap["line"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGMarkerAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "markerHeight"
      | "markerUnits"
      | "markerWidth"
      | "orient"
      | "preserveAspectRatio"
      | "refX"
      | "refY"
      | "viewBox"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["marker"] extends Element ? I["marker"] : SVGElementTagNameMap["marker"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGMaskAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "height" | "maskContentUnits" | "maskUnits" | "width" | "x" | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["mask"] extends Element ? I["mask"] : SVGElementTagNameMap["mask"]
    >,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGMetadataAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["metadata"] extends Element
        ? I["metadata"]
        : SVGElementTagNameMap["metadata"]
    >,
    GlobalAttributes {}
export interface SVGMpathAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["mpath"] extends Element ? I["mpath"] : SVGElementTagNameMap["mpath"]
    >,
    GlobalAttributes {}
export interface SVGPathAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "d" | "pathLength">,
    DataGlobalAttributes,
    SVGEvents<
      I["path"] extends Element ? I["path"] : SVGElementTagNameMap["path"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGPatternAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "height"
      | "patternContentUnits"
      | "patternTransform"
      | "patternUnits"
      | "preserveAspectRatio"
      | "viewBox"
      | "width"
      | "x"
      | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["pattern"] extends Element
        ? I["pattern"]
        : SVGElementTagNameMap["pattern"]
    >,
    AnimationTargetElementAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGPolygonAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "pathLength" | "points">,
    DataGlobalAttributes,
    SVGEvents<
      I["polygon"] extends Element
        ? I["polygon"]
        : SVGElementTagNameMap["polygon"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGPolylineAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "pathLength" | "points">,
    DataGlobalAttributes,
    SVGEvents<
      I["polyline"] extends Element
        ? I["polyline"]
        : SVGElementTagNameMap["polyline"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGRadialGradientAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "cx"
      | "cy"
      | "fr"
      | "fx"
      | "fy"
      | "gradientTransform"
      | "gradientUnits"
      | "pathLength"
      | "r"
      | "spreadMethod"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["radialGradient"] extends Element
        ? I["radialGradient"]
        : SVGElementTagNameMap["radialGradient"]
    >,
    AnimationTargetElementAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGRectAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "height" | "pathLength" | "rx" | "ry" | "width" | "x" | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["rect"] extends Element ? I["rect"] : SVGElementTagNameMap["rect"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGScriptAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "crossorigin" | "type">,
    DataGlobalAttributes,
    SVGEvents<
      I["script"] extends Element ? I["script"] : SVGElementTagNameMap["script"]
    >,
    AnimationTargetElementAttributes,
    GlobalAttributes {}
export interface SVGSetAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "to">,
    DataGlobalAttributes,
    SVGEvents<
      I["set"] extends Element ? I["set"] : SVGElementTagNameMap["set"]
    >,
    AnimationAttributeTargetAttributes,
    AnimationTimingAttributes,
    GlobalAttributes {}
export interface SVGStopAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["stop"] extends Element ? I["stop"] : SVGElementTagNameMap["stop"]
    >,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGStyleAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "media" | "type">,
    DataGlobalAttributes,
    SVGEvents<
      I["style"] extends Element ? I["style"] : SVGElementTagNameMap["style"]
    >,
    GlobalAttributes {}
export interface SVGSvgAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "height" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["svg"] extends Element ? I["svg"] : SVGElementTagNameMap["svg"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {
  /**
   * Specifies the XML Namespace of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xmlns} */
  xmlns?: ValueSets["87"];
}
export interface SVGSwitchAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["switch"] extends Element ? I["switch"] : SVGElementTagNameMap["switch"]
    >,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGSymbolAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "height"
      | "preserveAspectRatio"
      | "refX"
      | "refY"
      | "viewBox"
      | "width"
      | "x"
      | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["symbol"] extends Element ? I["symbol"] : SVGElementTagNameMap["symbol"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGTextAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "dx" | "dy" | "lengthAdjust" | "rotate" | "textLength" | "x" | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["text"] extends Element ? I["text"] : SVGElementTagNameMap["text"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGTextPathAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "lengthAdjust" | "spacing" | "textLength">,
    DataGlobalAttributes,
    SVGEvents<
      I["textPath"] extends Element
        ? I["textPath"]
        : SVGElementTagNameMap["textPath"]
    >,
    AnimationTargetElementAttributes,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {
  /**
   * Which method to render individual glyphs along the path.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/method} */
  method?: ValueSets["89"];
}
export interface SVGTitleAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    SVGEvents<
      I["title"] extends Element ? I["title"] : SVGElementTagNameMap["title"]
    >,
    GlobalAttributes {}
export interface SVGTspanAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "dx" | "dy" | "lengthAdjust" | "rotate" | "textLength" | "x" | "y"
    >,
    DataGlobalAttributes,
    SVGEvents<
      I["tspan"] extends Element ? I["tspan"] : SVGElementTagNameMap["tspan"]
    >,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGUseAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "height" | "width" | "x" | "y">,
    DataGlobalAttributes,
    SVGEvents<
      I["use"] extends Element ? I["use"] : SVGElementTagNameMap["use"]
    >,
    AnimationTargetElementAttributes,
    AriaAttributes,
    PresentationAttributes,
    GlobalAttributes {}
export interface SVGViewAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "preserveAspectRatio" | "viewBox">,
    DataGlobalAttributes,
    SVGEvents<
      I["view"] extends Element ? I["view"] : SVGElementTagNameMap["view"]
    >,
    AriaAttributes,
    GlobalAttributes {}
export interface SVGElements<I extends {} = {}> {
  /**
   * The `<a>` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a} */
  a: SVGAAttributes<I>;
  /**
   * Provides a way to animate an attribute of an element over time.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate} */
  animate: SVGAnimateAttributes<I>;
  /**
   * Provides a way to define how an element moves along a motion path.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion} */
  animateMotion: SVGAnimateMotionAttributes<I>;
  /**
   * animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform} */
  animateTransform: SVGAnimateTransformAttributes<I>;
  /**
   * Create circles based on a center point and a radius.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle} */
  circle: SVGCircleAttributes<I>;
  /**
   * Defines a clipping path. A clipping path is used/referenced using the clip-path property.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath} */
  clipPath: SVGClipPathAttributes<I>;
  /**
   * Is used to store graphical objects that will be used at a later time.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs} */
  defs: SVGDefsAttributes<I>;
  /**
   * Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc} */
  desc: SVGDescAttributes<I>;
  /**
   * allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/discard} */
  discard: SVGDiscardAttributes<I>;
  /**
   * The ellipse element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse} */
  ellipse: SVGEllipseAttributes<I>;
  /**
   * The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend} */
  feBlend: SVGFeBlendAttributes<I>;
  /**
   * The <feColorMatrix> SVG filter element changes colors based on a transformation matrix.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix} */
  feColorMatrix: SVGFeColorMatrixAttributes<I>;
  /**
   * Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer} */
  feComponentTransfer: SVGFeComponentTransferAttributes<I>;
  /**
   * This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite} */
  feComposite: SVGFeCompositeAttributes<I>;
  /**
   * The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix} */
  feConvolveMatrix: SVGFeConvolveMatrixAttributes<I>;
  /**
   * The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting} */
  feDiffuseLighting: SVGFeDiffuseLightingAttributes<I>;
  /**
   * The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap} */
  feDisplacementMap: SVGFeDisplacementMapAttributes<I>;
  /**
   * The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight} */
  feDistantLight: SVGFeDistantLightAttributes<I>;
  /**
   * The <feDropShadow> filter primitive creates a drop shadow of the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow} */
  feDropShadow: SVGFeDropShadowAttributes<I>;
  /**
   * The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood} */
  feFlood: SVGFeFloodAttributes<I>;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA} */
  feFuncA: SVGFeFuncAAttributes<I>;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB} */
  feFuncB: SVGFeFuncBAttributes<I>;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG} */
  feFuncG: SVGFeFuncGAttributes<I>;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR} */
  feFuncR: SVGFeFuncRAttributes<I>;
  /**
   * The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur} */
  feGaussianBlur: SVGFeGaussianBlurAttributes<I>;
  /**
   * The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage} */
  feImage: SVGFeImageAttributes<I>;
  /**
   * The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge} */
  feMerge: SVGFeMergeAttributes<I>;
  /**
   * The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode} */
  feMergeNode: SVGFeMergeNodeAttributes<I>;
  /**
   * The <feMorphology> SVG filter primitive is used to erode or dilate the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology} */
  feMorphology: SVGFeMorphologyAttributes<I>;
  /**
   * The <feOffset> SVG filter primitive allows to offset the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset} */
  feOffset: SVGFeOffsetAttributes<I>;
  /**
   * The <fePointLight> SVG filter primitive allows to create a point light effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight} */
  fePointLight: SVGFePointLightAttributes<I>;
  /**
   * The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting} */
  feSpecularLighting: SVGFeSpecularLightingAttributes<I>;
  /**
   * The <feSpotLight> SVG filter primitive allows to create a spotlight effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight} */
  feSpotLight: SVGFeSpotLightAttributes<I>;
  /**
   * The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile} */
  feTile: SVGFeTileAttributes<I>;
  /**
   * The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence} */
  feTurbulence: SVGFeTurbulenceAttributes<I>;
  /**
   * The <filter> SVG element serves as container for atomic filter operations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter} */
  filter: SVGFilterAttributes<I>;
  /**
   * The <foreignObject> SVG element allows for inclusion of a foreign XML namespace which has its graphical content drawn by a different user agent. The included foreign graphical content is subject to SVG transformations and compositing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject} */
  foreignObject: SVGForeignObjectAttributes<I>;
  /**
   * The <g> SVG element is a container used to group other SVG elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g} */
  g: SVGGAttributes<I>;
  /**
   * The <image> SVG element allows a raster image to be included in an SVG document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image} */
  image: SVGImageAttributes<I>;
  /**
   * The <line> element is an SVG basic shape used to create a line connecting two points.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line} */
  line: SVGLineAttributes<I>;
  /**
   * The <linearGradient> SVG element lets authors define linear gradients to fill or stroke graphical elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient} */
  linearGradient: SVGLinearGradientAttributes<I>;
  /**
   * The <marker> element defines the graphics that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker} */
  marker: SVGMarkerAttributes<I>;
  /**
   * The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask} */
  mask: SVGMaskAttributes<I>;
  /**
   * The <metadata> SVG element allows to add metadata to SVG content. Metadata is structured information about data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata} */
  metadata: SVGMetadataAttributes<I>;
  /**
   * The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath} */
  mpath: SVGMpathAttributes<I>;
  /**
   * The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path} */
  path: SVGPathAttributes<I>;
  /**
   * The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals ("tiled") to cover an area. The <pattern> is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern} */
  pattern: SVGPatternAttributes<I>;
  /**
   * The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the <polyline> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon} */
  polygon: SVGPolygonAttributes<I>;
  /**
   * The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline} */
  polyline: SVGPolylineAttributes<I>;
  /**
   * The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient} */
  radialGradient: SVGRadialGradientAttributes<I>;
  /**
   * The rect element is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height. It may also be used to create rectangles with rounded corners.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect} */
  rect: SVGRectAttributes<I>;
  /**
   * A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script} */
  script: SVGScriptAttributes<I>;
  /**
   * The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set} */
  set: SVGSetAttributes<I>;
  /**
   * The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop} */
  stop: SVGStopAttributes<I>;
  /**
   * The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style} */
  style: SVGStyleAttributes<I>;
  /**
   * The svg element can be used to embed an SVG fragment inside the current document (for example, an HTML document). This SVG fragment has its own viewport and coordinate system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg} */
  svg: SVGSvgAttributes<I>;
  /**
   * The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch} */
  switch: SVGSwitchAttributes<I>;
  /**
   * The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element. The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility. Note that a symbol element itself is not rendered. Only instances of a symbol element (i.e., a reference to a symbol by a <use> element) are rendered.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol} */
  symbol: SVGSymbolAttributes<I>;
  /**
   * The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text} */
  text: SVGTextAttributes<I>;
  /**
   * In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath} */
  textPath: SVGTextPathAttributes<I>;
  /**
   * Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improve accessibility of SVG documents
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title} */
  title: SVGTitleAttributes<I>;
  /**
   * Defines a subtext within a <text> element or another <tspan> element. It allows for adjustment of the style and/or position of that subtext as needed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan} */
  tspan: SVGTspanAttributes<I>;
  /**
   * The <use> element takes nodes from within the SVG document, and duplicates them somewhere else. The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, and then pasted where the use element is, much like cloned template elements in HTML5. Since the cloned nodes are not exposed, care must be taken when using CSS to style a use element and its hidden descendants. CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use} */
  use: SVGUseAttributes<I>;
  /**
   * A view is a defined way to view the image, like a zoom level or a detail view.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view} */
  view: SVGViewAttributes<I>;
}
