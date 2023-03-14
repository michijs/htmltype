// file generated from github:lishu/vscode-svg2
// Data Version 1.1)
import { AllAttributes } from "./AllAttributes";
import { SVGEvents } from "../Events";
import { DataGlobalAttributes } from "../types";

interface GlobalAttributes
  extends Pick<
    AllAttributes,
    "class" | "id" | "lang" | "style" | "systemLanguage" | "tabindex"
  > {}
interface AnimationAdditionAttributes
  extends Pick<AllAttributes, "accumulate" | "additive"> {}
interface AnimationAttributeTargetAttributes
  extends Pick<AllAttributes, "attributeName" | "attributeType"> {}
interface AnimationTargetElementAttributes
  extends Pick<AllAttributes, "href"> {}
interface AnimationTimingAttributes
  extends Pick<
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
  > {}
interface AnimationValueAttributes
  extends Pick<
    AllAttributes,
    "by" | "calcMode" | "from" | "keySplines" | "keyTimes" | "to" | "values"
  > {}
interface AriaAttributes
  extends Pick<
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
  > {}
interface FilterPrimitiveAttributes
  extends Pick<AllAttributes, "height" | "result" | "width" | "x" | "y"> {}
interface PresentationAttributes
  extends Pick<
    AllAttributes,
    | "alignment-baseline"
    | "baseline-shift"
    | "clip"
    | "clip-path"
    | "clip-rule"
    | "color"
    | "color-interpolation"
    | "color-interpolation-filters"
    | "color-profile"
    | "color-rendering"
    | "cursor"
    | "direction"
    | "display"
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
  > {}
interface TransferFunctionAttributes
  extends Pick<
    AllAttributes,
    | "amplitude"
    | "amplitude"
    | "exponent"
    | "intercept"
    | "tableValues"
    | "type"
  > {}
export interface SVGElementA
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["a"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "download" | "hreflang" | "referrerpolicy" | "rel" | "target"
    >,
    AnimationTargetElementAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes,
    TransferFunctionAttributes {}
export interface SVGElementAnimate
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animate"]>,
    GlobalAttributes,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes {}
export interface SVGElementAnimateMotion
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animateMotion"]>,
    GlobalAttributes,
    Pick<AllAttributes, "keyPoints" | "path" | "rotate">,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes {}
export interface SVGElementAnimateTransform
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animateTransform"]>,
    GlobalAttributes,
    AnimationAdditionAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTargetElementAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes {}
export interface SVGElementCircle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["circle"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cx" | "cy" | "pathLength" | "r">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementClipPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["clipPath"]>,
    GlobalAttributes,
    Pick<AllAttributes, "clipPathUnits">,
    PresentationAttributes {}
export interface SVGElementDefs
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["defs"]>,
    GlobalAttributes,
    PresentationAttributes {}
export interface SVGElementDesc
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["desc"]>,
    GlobalAttributes {}
export interface SVGElementDiscard
  extends DataGlobalAttributes,
    SVGEvents<SVGElement>,
    GlobalAttributes,
    Pick<AllAttributes, "begin">,
    AnimationTargetElementAttributes {}
export interface SVGElementEllipse
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["ellipse"]>,
    GlobalAttributes,
    Pick<AllAttributes, "cx" | "cy" | "pathLength" | "rx" | "ry">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementFeBlend
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feBlend"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in" | "in2" | "mode">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeColorMatrix
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feColorMatrix"]>,
    GlobalAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeComponentTransfer
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feComponentTransfer"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeComposite
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feComposite"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in" | "in2" | "k1" | "k2" | "k3" | "k4" | "operator">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeConvolveMatrix
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feConvolveMatrix"]>,
    GlobalAttributes,
    Pick<
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
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeDiffuseLighting
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDiffuseLighting"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "diffuseConstant" | "in" | "kernelUnitLength" | "surfaceScale"
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeDisplacementMap
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDisplacementMap"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector"
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeDistantLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDistantLight"]>,
    GlobalAttributes,
    Pick<AllAttributes, "azimuth" | "elevation"> {}
export interface SVGElementFeDropShadow
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDropShadow"]>,
    GlobalAttributes,
    Pick<AllAttributes, "dx" | "dy" | "in" | "stdDeviation">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeFlood
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFlood"]>,
    GlobalAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeFuncA
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncA"]>,
    GlobalAttributes,
    TransferFunctionAttributes {}
export interface SVGElementFeFuncB
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncB"]>,
    GlobalAttributes,
    TransferFunctionAttributes {}
export interface SVGElementFeFuncG
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncG"]>,
    GlobalAttributes,
    TransferFunctionAttributes {}
export interface SVGElementFeFuncR
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncR"]>,
    GlobalAttributes,
    TransferFunctionAttributes {}
export interface SVGElementFeGaussianBlur
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feGaussianBlur"]>,
    GlobalAttributes,
    Pick<AllAttributes, "edgeMode" | "in" | "stdDeviation">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeImage
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feImage"]>,
    GlobalAttributes,
    Pick<AllAttributes, "preserveAspectRatio">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeMerge
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMerge"]>,
    GlobalAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeMergeNode
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMergeNode"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in"> {}
export interface SVGElementFeMorphology
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMorphology"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in" | "operator" | "radius">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeOffset
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feOffset"]>,
    GlobalAttributes,
    Pick<AllAttributes, "dx" | "dy" | "in">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFePointLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["fePointLight"]>,
    GlobalAttributes,
    Pick<AllAttributes, "result" | "x" | "y" | "z"> {}
export interface SVGElementFeSpecularLighting
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feSpecularLighting"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "in"
      | "kernelUnitLength"
      | "specularConstant"
      | "specularExponent"
      | "surfaceScale"
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeSpotLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feSpotLight"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "limitingConeAngle"
      | "pointsAtX"
      | "pointsAtY"
      | "pointsAtZ"
      | "result"
      | "x"
      | "y"
      | "z"
    > {}
export interface SVGElementFeTile
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feTile"]>,
    GlobalAttributes,
    Pick<AllAttributes, "in">,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFeTurbulence
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feTurbulence"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type"
    >,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementFilter
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["filter"]>,
    GlobalAttributes,
    Pick<AllAttributes, "filterUnits" | "primitiveUnits">,
    FilterPrimitiveAttributes {}
export interface SVGElementForeignObject
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["foreignObject"]>,
    GlobalAttributes,
    Pick<AllAttributes, "height" | "width" | "x" | "y">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementG
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["g"]>,
    GlobalAttributes,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementImage
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["image"]>,
    GlobalAttributes,
    Pick<AllAttributes, "crossorigin" | "preserveAspectRatio">,
    AnimationTargetElementAttributes,
    FilterPrimitiveAttributes,
    PresentationAttributes {}
export interface SVGElementLine
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["line"]>,
    GlobalAttributes,
    Pick<AllAttributes, "pathLength" | "x1" | "x2" | "y1" | "y2">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementLinearGradient
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["linearGradient"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "gradientTransform"
      | "gradientUnits"
      | "spreadMethod"
      | "x1"
      | "x2"
      | "y1"
      | "y2"
    >,
    AnimationTargetElementAttributes,
    PresentationAttributes {}
export interface SVGElementMarker
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["marker"]>,
    GlobalAttributes,
    Pick<
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
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementMask
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["mask"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "height" | "maskContentUnits" | "maskUnits" | "width" | "x" | "y"
    >,
    PresentationAttributes {}
export interface SVGElementMetadata
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["metadata"]>,
    GlobalAttributes {}
export interface SVGElementMpath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["mpath"]>,
    GlobalAttributes {}
export interface SVGElementPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["path"]>,
    GlobalAttributes,
    Pick<AllAttributes, "d" | "pathLength">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementPattern
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["pattern"]>,
    GlobalAttributes,
    Pick<
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
    AnimationTargetElementAttributes,
    PresentationAttributes {}
export interface SVGElementPolygon
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["polygon"]>,
    GlobalAttributes,
    Pick<AllAttributes, "pathLength" | "points">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementPolyline
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["polyline"]>,
    GlobalAttributes,
    Pick<AllAttributes, "pathLength" | "points">,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementRadialGradient
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["radialGradient"]>,
    GlobalAttributes,
    Pick<
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
    AnimationTargetElementAttributes,
    PresentationAttributes {}
export interface SVGElementRect
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["rect"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "height" | "pathLength" | "rx" | "ry" | "width" | "x" | "y"
    >,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementScript
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["script"]>,
    GlobalAttributes,
    Pick<AllAttributes, "crossorigin" | "type">,
    AnimationTargetElementAttributes {}
export interface SVGElementSet
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["set"]>,
    GlobalAttributes,
    Pick<AllAttributes, "to">,
    AnimationAttributeTargetAttributes,
    AnimationTimingAttributes {}
export interface SVGElementStop
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["stop"]>,
    GlobalAttributes,
    PresentationAttributes {}
export interface SVGElementStyle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["style"]>,
    GlobalAttributes,
    Pick<AllAttributes, "media" | "type"> {}
export interface SVGElementSvg
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["svg"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      | "height"
      | "preserveAspectRatio"
      | "viewBox"
      | "width"
      | "x"
      | "xmlns"
      | "y"
    >,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementSwitch
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["switch"]>,
    GlobalAttributes,
    PresentationAttributes {}
export interface SVGElementSymbol
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["symbol"]>,
    GlobalAttributes,
    Pick<
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
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementText
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["text"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "dx" | "dy" | "lengthAdjust" | "rotate" | "textLength" | "x" | "y"
    >,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementTextPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["textPath"]>,
    GlobalAttributes,
    Pick<AllAttributes, "lengthAdjust" | "method" | "spacing" | "textLength">,
    AnimationTargetElementAttributes,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementTitle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["title"]>,
    GlobalAttributes {}
export interface SVGElementTspan
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["tspan"]>,
    GlobalAttributes,
    Pick<
      AllAttributes,
      "dx" | "dy" | "lengthAdjust" | "rotate" | "textLength" | "x" | "y"
    >,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementUse
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["use"]>,
    GlobalAttributes,
    Pick<AllAttributes, "height" | "width" | "x" | "y">,
    AnimationTargetElementAttributes,
    AriaAttributes,
    PresentationAttributes {}
export interface SVGElementView
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["view"]>,
    GlobalAttributes,
    Pick<AllAttributes, "preserveAspectRatio" | "viewBox">,
    AriaAttributes {}
export interface SVGElements {
  /**
   * The `<a>` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a} */
  a: SVGElementA;
  /**
   * Provides a way to animate an attribute of an element over time.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate} */
  animate: SVGElementAnimate;
  /**
   * Provides a way to define how an element moves along a motion path.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion} */
  animateMotion: SVGElementAnimateMotion;
  /**
   * animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform} */
  animateTransform: SVGElementAnimateTransform;
  /**
   * Create circles based on a center point and a radius.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle} */
  circle: SVGElementCircle;
  /**
   * Defines a clipping path. A clipping path is used/referenced using the clip-path property.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath} */
  clipPath: SVGElementClipPath;
  /**
   * Is used to store graphical objects that will be used at a later time.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs} */
  defs: SVGElementDefs;
  /**
   * Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc} */
  desc: SVGElementDesc;
  /**
   * allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/discard} */
  discard: SVGElementDiscard;
  /**
   * The ellipse element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse} */
  ellipse: SVGElementEllipse;
  /**
   * The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend} */
  feBlend: SVGElementFeBlend;
  /**
   * The <feColorMatrix> SVG filter element changes colors based on a transformation matrix.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix} */
  feColorMatrix: SVGElementFeColorMatrix;
  /**
   * Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer} */
  feComponentTransfer: SVGElementFeComponentTransfer;
  /**
   * This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite} */
  feComposite: SVGElementFeComposite;
  /**
   * The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix} */
  feConvolveMatrix: SVGElementFeConvolveMatrix;
  /**
   * The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting} */
  feDiffuseLighting: SVGElementFeDiffuseLighting;
  /**
   * The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap} */
  feDisplacementMap: SVGElementFeDisplacementMap;
  /**
   * The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight} */
  feDistantLight: SVGElementFeDistantLight;
  /**
   * The <feDropShadow> filter primitive creates a drop shadow of the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow} */
  feDropShadow: SVGElementFeDropShadow;
  /**
   * The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood} */
  feFlood: SVGElementFeFlood;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA} */
  feFuncA: SVGElementFeFuncA;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB} */
  feFuncB: SVGElementFeFuncB;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG} */
  feFuncG: SVGElementFeFuncG;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR} */
  feFuncR: SVGElementFeFuncR;
  /**
   * The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur} */
  feGaussianBlur: SVGElementFeGaussianBlur;
  /**
   * The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage} */
  feImage: SVGElementFeImage;
  /**
   * The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge} */
  feMerge: SVGElementFeMerge;
  /**
   * The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode} */
  feMergeNode: SVGElementFeMergeNode;
  /**
   * The <feMorphology> SVG filter primitive is used to erode or dilate the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology} */
  feMorphology: SVGElementFeMorphology;
  /**
   * The <feOffset> SVG filter primitive allows to offset the input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset} */
  feOffset: SVGElementFeOffset;
  /**
   * The <fePointLight> SVG filter primitive allows to create a point light effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight} */
  fePointLight: SVGElementFePointLight;
  /**
   * The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting} */
  feSpecularLighting: SVGElementFeSpecularLighting;
  /**
   * The <feSpotLight> SVG filter primitive allows to create a spotlight effect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight} */
  feSpotLight: SVGElementFeSpotLight;
  /**
   * The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile} */
  feTile: SVGElementFeTile;
  /**
   * The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence} */
  feTurbulence: SVGElementFeTurbulence;
  /**
   * The <filter> SVG element serves as container for atomic filter operations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter} */
  filter: SVGElementFilter;
  /**
   * The <foreignObject> SVG element allows for inclusion of a foreign XML namespace which has its graphical content drawn by a different user agent. The included foreign graphical content is subject to SVG transformations and compositing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject} */
  foreignObject: SVGElementForeignObject;
  /**
   * The <g> SVG element is a container used to group other SVG elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g} */
  g: SVGElementG;
  /**
   * The <image> SVG element allows a raster image to be included in an SVG document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image} */
  image: SVGElementImage;
  /**
   * The <line> element is an SVG basic shape used to create a line connecting two points.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line} */
  line: SVGElementLine;
  /**
   * The <linearGradient> SVG element lets authors define linear gradients to fill or stroke graphical elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient} */
  linearGradient: SVGElementLinearGradient;
  /**
   * The <marker> element defines the graphics that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker} */
  marker: SVGElementMarker;
  /**
   * The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask} */
  mask: SVGElementMask;
  /**
   * The <metadata> SVG element allows to add metadata to SVG content. Metadata is structured information about data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata} */
  metadata: SVGElementMetadata;
  /**
   * The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath} */
  mpath: SVGElementMpath;
  /**
   * The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path} */
  path: SVGElementPath;
  /**
   * The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals ("tiled") to cover an area. The <pattern> is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern} */
  pattern: SVGElementPattern;
  /**
   * The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the <polyline> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon} */
  polygon: SVGElementPolygon;
  /**
   * The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline} */
  polyline: SVGElementPolyline;
  /**
   * The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient} */
  radialGradient: SVGElementRadialGradient;
  /**
   * The rect element is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height. It may also be used to create rectangles with rounded corners.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect} */
  rect: SVGElementRect;
  /**
   * A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script} */
  script: SVGElementScript;
  /**
   * The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set} */
  set: SVGElementSet;
  /**
   * The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop} */
  stop: SVGElementStop;
  /**
   * The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style} */
  style: SVGElementStyle;
  /**
   * The svg element can be used to embed an SVG fragment inside the current document (for example, an HTML document). This SVG fragment has its own viewport and coordinate system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg} */
  svg: SVGElementSvg;
  /**
   * The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch} */
  switch: SVGElementSwitch;
  /**
   * The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element. The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility. Note that a symbol element itself is not rendered. Only instances of a symbol element (i.e., a reference to a symbol by a <use> element) are rendered.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol} */
  symbol: SVGElementSymbol;
  /**
   * The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text} */
  text: SVGElementText;
  /**
   * In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath} */
  textPath: SVGElementTextPath;
  /**
   * Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improve accessibility of SVG documents
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title} */
  title: SVGElementTitle;
  /**
   * Defines a subtext within a <text> element or another <tspan> element. It allows for adjustment of the style and/or position of that subtext as needed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan} */
  tspan: SVGElementTspan;
  /**
   * The <use> element takes nodes from within the SVG document, and duplicates them somewhere else. The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, and then pasted where the use element is, much like cloned template elements in HTML5. Since the cloned nodes are not exposed, care must be taken when using CSS to style a use element and its hidden descendants. CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use} */
  use: SVGElementUse;
  /**
   * A view is a defined way to view the image, like a zoom level or a detail view.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view} */
  view: SVGElementView;
}
