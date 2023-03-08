// file generated from github:lishu/vscode-svg2
// Data Version 1.1)
import { AllAttributes } from "./AllAttributes";
import { SVGEvents } from "../Events";
import { DataGlobalAttributes } from "../types";

type SVGCoreAttributes = Pick<
  AllAttributes,
  "id" | "tabindex" | "xml:lang" | "xml:space"
>;
type StyleAttributes = Pick<AllAttributes, "style" | "class">;
type SVGPresentationAttributes = Pick<
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
>;
type XLinkAttributes = Pick<
  AllAttributes,
  "xlink:href" | "xlink:title" | "xlink:show"
>;
type AnimationAttributeTargetAttributes = Pick<
  AllAttributes,
  "attributeType" | "attributeName"
>;
type SVGFilterPrimitiveAttributes = Pick<
  AllAttributes,
  "x" | "y" | "height" | "result" | "width"
>;
type SVGAnimationTimingAttributes = Pick<
  AllAttributes,
  | "begin"
  | "dur"
  | "end"
  | "min"
  | "max"
  | "restart"
  | "repeatCount"
  | "repeatDur"
  | "fill"
>;
type SVGAnimationAdditionAttributes = Pick<
  AllAttributes,
  "additive" | "accumulate"
>;
type SVGAnimationValueAttributes = Pick<
  AllAttributes,
  "calcMode" | "keyTimes" | "keySplines" | "from" | "to"
>;
export interface SVGElementAnimate
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animate"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    XLinkAttributes,
    AnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationValueAttributes {}
export interface SVGElementAnimateMotion
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animateMotion"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    XLinkAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationValueAttributes {}
export interface SVGElementAnimateTransform
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["animateTransform"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "type" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    XLinkAttributes,
    AnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes,
    SVGAnimationAdditionAttributes,
    SVGAnimationValueAttributes {}
export interface SVGElementCircle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["circle"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "cx" | "cy" | "r" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementClipPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["clipPath"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "clipPathUnits" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementDefs
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["defs"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementDesc
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["desc"]>,
    SVGCoreAttributes,
    StyleAttributes {}
export interface SVGElementEllipse
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["ellipse"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "cx"
      | "cy"
      | "rx"
      | "ry"
      | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementFeBlend
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feBlend"]>,
    Pick<AllAttributes, "in" | "in2" | "mode">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeColorMatrix
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feColorMatrix"]>,
    Pick<AllAttributes, "in" | "type">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeComponentTransfer
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feComponentTransfer"]>,
    Pick<AllAttributes, "in">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeComposite
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feComposite"]>,
    Pick<AllAttributes, "in" | "in2" | "operator" | "k1" | "k2" | "k3" | "k4">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeConvolveMatrix
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feConvolveMatrix"]>,
    Pick<
      AllAttributes,
      | "in"
      | "order"
      | "kernelMatrix"
      | "divisor"
      | "bias"
      | "targetX"
      | "targetY"
      | "edgeMode"
      | "kernelUnitLength"
      | "preserveAlpha"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeDiffuseLighting
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDiffuseLighting"]>,
    Pick<
      AllAttributes,
      | "class"
      | "type"
      | "in"
      | "surfaceScale"
      | "diffuseConstant"
      | "kernelUnitLength"
    >,
    SVGCoreAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeDisplacementMap
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDisplacementMap"]>,
    Pick<
      AllAttributes,
      "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeDistantLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDistantLight"]>,
    Pick<AllAttributes, "azimuth" | "elevation">,
    SVGCoreAttributes {}
export interface SVGElementFeDropShadow
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feDropShadow"]>,
    Pick<AllAttributes, "in" | "stdDeviation" | "dx" | "dy">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeFlood
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFlood"]>,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeFuncA
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncA"]>,
    Pick<AllAttributes, "type">,
    SVGCoreAttributes {}
export interface SVGElementFeFuncB
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncB"]>,
    Pick<AllAttributes, "type">,
    SVGCoreAttributes {}
export interface SVGElementFeFuncG
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncG"]>,
    Pick<AllAttributes, "type">,
    SVGCoreAttributes {}
export interface SVGElementFeFuncR
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feFuncR"]>,
    Pick<AllAttributes, "type">,
    SVGCoreAttributes {}
export interface SVGElementFeGaussianBlur
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feGaussianBlur"]>,
    Pick<AllAttributes, "in" | "stdDeviation" | "edgeMode">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeImage
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feImage"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "preserveAspectRatio">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeMerge
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMerge"]>,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeMergeNode
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMergeNode"]>,
    Pick<AllAttributes, "in">,
    SVGCoreAttributes {}
export interface SVGElementFeMorphology
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feMorphology"]>,
    Pick<AllAttributes, "in" | "operator" | "radius">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeOffset
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feOffset"]>,
    Pick<AllAttributes, "in" | "dx" | "dy">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFePointLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["fePointLight"]>,
    Pick<AllAttributes, "x" | "y" | "z" | "result">,
    SVGCoreAttributes {}
export interface SVGElementFeSpecularLighting
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feSpecularLighting"]>,
    Pick<
      AllAttributes,
      | "in"
      | "surfaceScale"
      | "specularConstant"
      | "specularExponent"
      | "kernelUnitLength"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeSpotLight
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feSpotLight"]>,
    Pick<
      AllAttributes,
      | "x"
      | "y"
      | "z"
      | "pointsAtX"
      | "pointsAtY"
      | "pointsAtZ"
      | "specularExponent"
      | "limitingConeAngle"
      | "result"
    >,
    SVGCoreAttributes {}
export interface SVGElementFeTile
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feTile"]>,
    Pick<AllAttributes, "in">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFeTurbulence
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["feTurbulence"]>,
    Pick<
      AllAttributes,
      "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementFilter
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["filter"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "filterRes"
      | "filterUnits"
      | "primitiveUnits"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementForeignObject
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["foreignObject"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementG
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["g"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementImage
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["image"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "preserveAspectRatio" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementLine
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["line"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "x1"
      | "x2"
      | "y1"
      | "y2"
      | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementLinearGradient
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["linearGradient"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "gradientUnits"
      | "gradientTransform"
      | "x1"
      | "y1"
      | "x2"
      | "y2"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes {}
export interface SVGElementMarker
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["marker"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "viewBox"
      | "preserveAspectRatio"
      | "markerUnits"
      | "markerWidth"
      | "markerHeight"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementMetadata
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["metadata"]>,
    SVGCoreAttributes {}
export interface SVGElementMpath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["mpath"]>,
    Pick<AllAttributes, "externalResourcesRequired">,
    SVGCoreAttributes,
    XLinkAttributes {}
export interface SVGElementPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["path"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "d" | "pathLength" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementPattern
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["pattern"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "viewBox"
      | "patternUnits"
      | "patternContentUnits"
      | "patternTransform"
      | "preserveAspectRatio"
      | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementPolygon
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["polygon"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "points" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementPolyline
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["polyline"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "points" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementRadialGradient
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["radialGradient"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "gradientUnits"
      | "gradientTransform"
      | "cx"
      | "cy"
      | "r"
      | "fx"
      | "fy"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes {}
export interface SVGElementRect
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["rect"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "rx" | "ry" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementScript
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["script"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "type">,
    SVGCoreAttributes,
    XLinkAttributes {}
export interface SVGElementSet
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["set"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "to" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    XLinkAttributes,
    AnimationAttributeTargetAttributes,
    SVGAnimationTimingAttributes {}
export interface SVGElementStop
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["stop"]>,
    Pick<AllAttributes, "offset">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementStyle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["style"]>,
    Pick<AllAttributes, "type">,
    SVGCoreAttributes {}
export interface SVGElementSvg
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["svg"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "version"
      | "preserveAspectRatio"
      | "contentScriptType"
      | "contentStyleType"
      | "viewBox"
      | "xmlns"
      | "xmlns:xlink"
      | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementSwitch
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["switch"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementSymbol
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["symbol"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "preserveAspectRatio" | "viewBox"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementText
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["text"]>,
    Pick<
      AllAttributes,
      | "externalResourcesRequired"
      | "x"
      | "y"
      | "dx"
      | "dy"
      | "textLength"
      | "requiredFeatures"
      | "result"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes {}
export interface SVGElementTextPath
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["textPath"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "href" | "requiredFeatures"
    >,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes {}
export interface SVGElementTitle
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["title"]>,
    SVGCoreAttributes,
    StyleAttributes {}
export interface SVGElementUse
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["use"]>,
    Pick<AllAttributes, "externalResourcesRequired" | "requiredFeatures">,
    SVGCoreAttributes,
    StyleAttributes,
    SVGPresentationAttributes,
    XLinkAttributes,
    SVGFilterPrimitiveAttributes {}
export interface SVGElementView
  extends DataGlobalAttributes,
    SVGEvents<SVGElementTagNameMap["view"]>,
    Pick<
      AllAttributes,
      "externalResourcesRequired" | "viewBox" | "preserveAspectRatio"
    >,
    SVGCoreAttributes {}
export interface SVGElements {
  /**
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) */
  animate: SVGElementAnimate;
  /**
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion) */
  animateMotion: SVGElementAnimateMotion;
  /**
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform) */
  animateTransform: SVGElementAnimateTransform;
  /**
   * Create circles based on a center point and a radius.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) */
  circle: SVGElementCircle;
  /**
   * The <clipPath> SVG element defines a clipping path. A clipping path is used/referenced using the clip-path property.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) */
  clipPath: SVGElementClipPath;
  /**
   * SVG allows graphical objects to be defined for later reuse.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) */
  defs: SVGElementDefs;
  /**
   * Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) */
  desc: SVGElementDesc;
  /**
   * The ellipse element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) */
  ellipse: SVGElementEllipse;
  /**
   * The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend) */
  feBlend: SVGElementFeBlend;
  /**
   * The <feColorMatrix> SVG filter element changes colors based on a transformation matrix.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) */
  feColorMatrix: SVGElementFeColorMatrix;
  /**
   * Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer) */
  feComponentTransfer: SVGElementFeComponentTransfer;
  /**
   * This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite) */
  feComposite: SVGElementFeComposite;
  /**
   * The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix) */
  feConvolveMatrix: SVGElementFeConvolveMatrix;
  /**
   * The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting) */
  feDiffuseLighting: SVGElementFeDiffuseLighting;
  /**
   * The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap) */
  feDisplacementMap: SVGElementFeDisplacementMap;
  /**
   * The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight) */
  feDistantLight: SVGElementFeDistantLight;
  /**
   * The <feDropShadow> filter primitive creates a drop shadow of the input image.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow) */
  feDropShadow: SVGElementFeDropShadow;
  /**
   * The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood) */
  feFlood: SVGElementFeFlood;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA) */
  feFuncA: SVGElementFeFuncA;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB) */
  feFuncB: SVGElementFeFuncB;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG) */
  feFuncG: SVGElementFeFuncG;
  /**
   * The <feFuncA> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR) */
  feFuncR: SVGElementFeFuncR;
  /**
   * The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur) */
  feGaussianBlur: SVGElementFeGaussianBlur;
  /**
   * The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage) */
  feImage: SVGElementFeImage;
  /**
   * The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge) */
  feMerge: SVGElementFeMerge;
  /**
   * The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode) */
  feMergeNode: SVGElementFeMergeNode;
  /**
   * The <feMorphology> SVG filter primitive is used to erode or dilate the input image.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology) */
  feMorphology: SVGElementFeMorphology;
  /**
   * The <feOffset> SVG filter primitive allows to offset the input image.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset) */
  feOffset: SVGElementFeOffset;
  /**
   * The <fePointLight> SVG filter primitive allows to create a point light effect.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight) */
  fePointLight: SVGElementFePointLight;
  /**
   * The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting) */
  feSpecularLighting: SVGElementFeSpecularLighting;
  /**
   * The <feSpotLight> SVG filter primitive allows to create a spotlight effect.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight) */
  feSpotLight: SVGElementFeSpotLight;
  /**
   * The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile) */
  feTile: SVGElementFeTile;
  /**
   * The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence) */
  feTurbulence: SVGElementFeTurbulence;
  /**
   * The <filter> SVG element serves as container for atomic filter operations.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) */
  filter: SVGElementFilter;
  /**
   * The <foreignObject> SVG element allows for inclusion of a foreign XML namespace which has its graphical content drawn by a different user agent. The included foreign graphical content is subject to SVG transformations and compositing.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) */
  foreignObject: SVGElementForeignObject;
  /**
   * The <g> SVG element is a container used to group other SVG elements.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) */
  g: SVGElementG;
  /**
   * The <image> SVG element allows a raster image to be included in an SVG document.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image) */
  image: SVGElementImage;
  /**
   * The <line> element is an SVG basic shape used to create a line connecting two points.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) */
  line: SVGElementLine;
  /**
   * The <linearGradient> SVG element lets authors define linear gradients to fill or stroke graphical elements.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient) */
  linearGradient: SVGElementLinearGradient;
  /**
   * The <marker> element defines the graphics that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker) */
  marker: SVGElementMarker;
  /**
   * The <metadata> SVG element allows to add metadata to SVG content. Metadata is structured information about data.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata) */
  metadata: SVGElementMetadata;
  /**
   * The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath) */
  mpath: SVGElementMpath;
  /**
   * The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) */
  path: SVGElementPath;
  /**
   * The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals ("tiled") to cover an area. The <pattern> is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern) */
  pattern: SVGElementPattern;
  /**
   * The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the <polyline> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) */
  polygon: SVGElementPolygon;
  /**
   * The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) */
  polyline: SVGElementPolyline;
  /**
   * The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient) */
  radialGradient: SVGElementRadialGradient;
  /**
   * The rect element is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height. It may also be used to create rectangles with rounded corners.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect) */
  rect: SVGElementRect;
  /**
   * A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script) */
  script: SVGElementScript;
  /**
   * The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set) */
  set: SVGElementSet;
  /**
   * The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) */
  stop: SVGElementStop;
  /**
   * The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style) */
  style: SVGElementStyle;
  /**
   * The svg element can be used to embed an SVG fragment inside the current document (for example, an HTML document). This SVG fragment has its own viewport and coordinate system.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) */
  svg: SVGElementSvg;
  /**
   * The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch) */
  switch: SVGElementSwitch;
  /**
   * The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element. The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility. Note that a symbol element itself is not rendered. Only instances of a symbol element (i.e., a reference to a symbol by a <use> element) are rendered.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol) */
  symbol: SVGElementSymbol;
  /**
   * The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text) */
  text: SVGElementText;
  /**
   * In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath) */
  textPath: SVGElementTextPath;
  /**
   * Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improve accessibility of SVG documents
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title) */
  title: SVGElementTitle;
  /**
   * The <use> element takes nodes from within the SVG document, and duplicates them somewhere else. The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, and then pasted where the use element is, much like cloned template elements in HTML5. Since the cloned nodes are not exposed, care must be taken when using CSS to style a use element and its hidden descendants. CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) */
  use: SVGElementUse;
  /**
   * A view is a defined way to view the image, like a zoom level or a detail view.
   *
   * [MDN References](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view) */
  view: SVGElementView;
}
