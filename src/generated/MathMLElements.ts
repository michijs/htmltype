// file generated from @michijs/vscode-mathml 1.0.2
// HTML Data Version 1.1
import { AllAttributes } from "./AllAttributes";
import { ValueSets } from "./ValueSets";
import { MathMLEvents } from "../Events";
import { DataGlobalAttributes } from "../types";
interface GlobalAttributes
  extends Pick<
    AllAttributes,
    "displaystyle" | "href" | "id" | "mathvariant" | "scriptlevel"
  > {
  /**
   * The text direction. Possible values are either `ltr` (left to right) or `rtl` (right to left).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Attribute} */
  dir?: ValueSets["41"];
}

export interface MathMLMathAttributes
  extends Pick<AllAttributes, "display">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {
  /**
   * Specifies the URI for the MathML namespace.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Attribute} */
  xmlns?: ValueSets["43"];
}
export interface MathMLMerrorAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMfracAttributes
  extends Pick<AllAttributes, "linethickness">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMiAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMmultiscriptsAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMnAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMoAttributes
  extends Pick<
      AllAttributes,
      | "fence"
      | "largeop"
      | "lspace"
      | "maxsize"
      | "minsize"
      | "movablelimits"
      | "rspace"
      | "separator"
      | "stretchy"
      | "symmetric"
    >,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMoverAttributes
  extends Pick<AllAttributes, "accent">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMpaddedAttributes
  extends Pick<
      AllAttributes,
      "depth" | "height" | "lspace" | "voffset" | "width"
    >,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMphantomAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMrootAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMrowAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMsAttributes
  extends Pick<AllAttributes, "lquote" | "rquote">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMspaceAttributes
  extends Pick<AllAttributes, "depth" | "height" | "width">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMsqrtAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMstyleAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMsubAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMsubsupAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMtableAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMtdAttributes
  extends Pick<AllAttributes, "columnspan" | "rowspan">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMtextAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMtrAttributes
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMunderAttributes
  extends Pick<AllAttributes, "accentunder">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLMunderoverAttributes
  extends Pick<AllAttributes, "accent" | "accentunder">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLSemanticsAttributes
  extends Pick<AllAttributes, "encoding">,
    DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElements {
  /**
   * The `<math>` MathML element is the top-level MathML element, used to write a single mathematical formula. It can be placed in HTML content where flow content is permitted.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math} */
  math?: MathMLMathAttributes;
  /**
   * The `<merror>` MathML element is used to display contents as error messages. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/merror} */
  merror?: MathMLMerrorAttributes;
  /**
   * The `<mfrac>` MathML element is used to display fractions. It can also be used to mark up fraction-like objects such as binomial coefficients and Legendre symbols.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac} */
  mfrac?: MathMLMfracAttributes;
  /**
   * The `<mi>` MathML element indicates that the content should be rendered as an identifier such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi} */
  mi?: MathMLMiAttributes;
  /**
   * The `<mmultiscripts>` MathML element is used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the `<msubsup>` element. Scripts can be either prescripts (placed before the expression) or postscripts (placed after it).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts} */
  mmultiscripts?: MathMLMmultiscriptsAttributes;
  /**
   * The `<mn>` MathML element represents a numeric literal which is normally a sequence of digits with a possible separator (a dot or a comma). However, it is also allowed to have arbitrary text in it which is actually a numeric quantity, for example "eleven".
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mn} */
  mn?: MathMLMnAttributes;
  /**
   * The `<mo>` MathML element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo} */
  mo?: MathMLMoAttributes;
  /**
   * The `<mover>` MathML element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mover} */
  mover?: MathMLMoverAttributes;
  /**
   * The `<mpadded>` MathML element is used to add extra padding and to set the general adjustment of position and size of enclosed contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mpadded} */
  mpadded?: MathMLMpaddedAttributes;
  /**
   * The `<mphantom>` MathML element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mphantom} */
  mphantom?: MathMLMphantomAttributes;
  /**
   * The `<mroot>` MathML element is used to display roots with an explicit index.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mroot} */
  mroot?: MathMLMrootAttributes;
  /**
   * The `<mrow>` MathML element is used to group sub-expressions, which usually contain one or more operators with their respective operands. This element renders as a horizontal row containing its arguments.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mrow} */
  mrow?: MathMLMrowAttributes;
  /**
   * The `<ms>` MathML element represents a string literal meant to be interpreted by programming languages and computer algebra systems.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms} */
  ms?: MathMLMsAttributes;
  /**
   * The `<mspace>` MathML element is used to display a blank space, whose size is set by its attributes.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mspace} */
  mspace?: MathMLMspaceAttributes;
  /**
   * The `<msqrt>` MathML element is used to display square roots (no index is displayed). The square root accepts only one argument, which leads to the following syntax: `<msqrt> base </msqrt>`.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msqrt} */
  msqrt?: MathMLMsqrtAttributes;
  /**
   * The `<mstyle>` MathML element is used to change the style of its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle} */
  mstyle?: MathMLMstyleAttributes;
  /**
   * The `<msub>` MathML element is used to attach a subscript to an expression.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub} */
  msub?: MathMLMsubAttributes;
  /**
   * The `<msubsup>` MathML element is used to attach both a subscript and a superscript, together, to an expression.
   *
   * It uses the following syntax: `<msubsup> base subscript superscript </msubsup>`.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup} */
  msubsup?: MathMLMsubsupAttributes;
  /**
   * The `<mtable>` MathML element allows you to create tables or matrices. Its children are `<mtr>` elements (representing rows), each of them having `<mtd>` elements as its children (representing cells). These elements are similar to `<table>`, `<tr>` and `<td>` elements of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable} */
  mtable?: MathMLMtableAttributes;
  /**
   * The `<mtd>` MathML element represents a cell in a table or a matrix. It may only appear in a `<mtr>` element. This element is similar to the `<td>` element of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd} */
  mtd?: MathMLMtdAttributes;
  /**
   * The `<mtext>` MathML element is used to render arbitrary text with no notational meaning, such as comments or annotations.
   * To display text with notational meaning, use `<mi>`, `<mn>`, `<mo>` or `<ms>` instead.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtext} */
  mtext?: MathMLMtextAttributes;
  /**
   * The `<mtr>` MathML element represents a row in a table or a matrix. It may only appear in a `<mtable>` element and its children are `<mtd>` elements representing cells. This element is similar to the `<tr>` element of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr} */
  mtr?: MathMLMtrAttributes;
  /**
   * The `<munder>` MathML element is used to attach an accent or a limit under an expression. It uses the following syntax: `<munder> base underscript </munder>`
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/munder} */
  munder?: MathMLMunderAttributes;
  /**
   * The `<munderover>` MathML element is used to attach accents or limits both under and over an expression.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/munderover} */
  munderover?: MathMLMunderoverAttributes;
  /**
   * The `<semantics>` MathML element associates annotations with a MathML expression, for example its text source as a lightweight markup language or mathematical meaning expressed in a special XML dialect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics} */
  semantics?: MathMLSemanticsAttributes;
}
