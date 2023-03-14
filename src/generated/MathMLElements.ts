// file generated from github:michijs/vscode-mathml
// Data Version 1.1)
import { AllAttributes } from "./AllAttributes";
import { MathMLEvents } from "../Events";
import { DataGlobalAttributes } from "../types";

interface GlobalAttributes
  extends Pick<
    AllAttributes,
    "dir" | "displaystyle" | "href" | "id" | "mathvariant" | "scriptlevel"
  > {}
export interface MathMLElementMath
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "display" | "xmlns"> {}
export interface MathMLElementMerror
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMfrac
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "linethickness"> {}
export interface MathMLElementMi
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMmultiscripts
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMn
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMo
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<
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
    > {}
export interface MathMLElementMover
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "accent"> {}
export interface MathMLElementMpadded
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "depth" | "height" | "lspace" | "voffset" | "width"> {}
export interface MathMLElementMphantom
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMroot
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMrow
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMs
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "lquote" | "rquote"> {}
export interface MathMLElementMspace
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "depth" | "height" | "width"> {}
export interface MathMLElementMsqrt
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMstyle
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMsub
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMsubsup
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMtable
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMtd
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "columnspan" | "rowspan"> {}
export interface MathMLElementMtext
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMtr
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes {}
export interface MathMLElementMunder
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "accentunder"> {}
export interface MathMLElementMunderover
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "accent" | "accentunder"> {}
export interface MathMLElementSemantics
  extends DataGlobalAttributes,
    MathMLEvents,
    GlobalAttributes,
    Pick<AllAttributes, "encoding"> {}
export interface MathMLElements {
  /**
   * The `<math>` MathML element is the top-level MathML element, used to write a single mathematical formula. It can be placed in HTML content where flow content is permitted.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math} */
  math: MathMLElementMath;
  /**
   * The `<merror>` MathML element is used to display contents as error messages. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/merror} */
  merror: MathMLElementMerror;
  /**
   * The `<mfrac>` MathML element is used to display fractions. It can also be used to mark up fraction-like objects such as binomial coefficients and Legendre symbols.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac} */
  mfrac: MathMLElementMfrac;
  /**
   * The `<mi>` MathML element indicates that the content should be rendered as an identifier such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi} */
  mi: MathMLElementMi;
  /**
   * The `<mmultiscripts>` MathML element is used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the `<msubsup>` element. Scripts can be either prescripts (placed before the expression) or postscripts (placed after it).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts} */
  mmultiscripts: MathMLElementMmultiscripts;
  /**
   * The `<mn>` MathML element represents a numeric literal which is normally a sequence of digits with a possible separator (a dot or a comma). However, it is also allowed to have arbitrary text in it which is actually a numeric quantity, for example "eleven".
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mn} */
  mn: MathMLElementMn;
  /**
   * The `<mo>` MathML element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo} */
  mo: MathMLElementMo;
  /**
   * The `<mover>` MathML element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mover} */
  mover: MathMLElementMover;
  /**
   * The `<mpadded>` MathML element is used to add extra padding and to set the general adjustment of position and size of enclosed contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mpadded} */
  mpadded: MathMLElementMpadded;
  /**
   * The `<mphantom>` MathML element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mphantom} */
  mphantom: MathMLElementMphantom;
  /**
   * The `<mroot>` MathML element is used to display roots with an explicit index.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mroot} */
  mroot: MathMLElementMroot;
  /**
   * The `<mrow>` MathML element is used to group sub-expressions, which usually contain one or more operators with their respective operands. This element renders as a horizontal row containing its arguments.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mrow} */
  mrow: MathMLElementMrow;
  /**
   * The `<ms>` MathML element represents a string literal meant to be interpreted by programming languages and computer algebra systems.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms} */
  ms: MathMLElementMs;
  /**
   * The `<mspace>` MathML element is used to display a blank space, whose size is set by its attributes.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mspace} */
  mspace: MathMLElementMspace;
  /**
   * The `<msqrt>` MathML element is used to display square roots (no index is displayed). The square root accepts only one argument, which leads to the following syntax: `<msqrt> base </msqrt>`.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msqrt} */
  msqrt: MathMLElementMsqrt;
  /**
   * The `<mstyle>` MathML element is used to change the style of its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle} */
  mstyle: MathMLElementMstyle;
  /**
   * The `<msub>` MathML element is used to attach a subscript to an expression.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub} */
  msub: MathMLElementMsub;
  /**
   * The `<msubsup>` MathML element is used to attach both a subscript and a superscript, together, to an expression.
   *
   * It uses the following syntax: `<msubsup> base subscript superscript </msubsup>`.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup} */
  msubsup: MathMLElementMsubsup;
  /**
   * The `<mtable>` MathML element allows you to create tables or matrices. Its children are `<mtr>` elements (representing rows), each of them having `<mtd>` elements as its children (representing cells). These elements are similar to `<table>`, `<tr>` and `<td>` elements of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable} */
  mtable: MathMLElementMtable;
  /**
   * The `<mtd>` MathML element represents a cell in a table or a matrix. It may only appear in a `<mtr>` element. This element is similar to the `<td>` element of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd} */
  mtd: MathMLElementMtd;
  /**
   * The `<mtext>` MathML element is used to render arbitrary text with no notational meaning, such as comments or annotations.
   * To display text with notational meaning, use `<mi>`, `<mn>`, `<mo>` or `<ms>` instead.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtext} */
  mtext: MathMLElementMtext;
  /**
   * The `<mtr>` MathML element represents a row in a table or a matrix. It may only appear in a `<mtable>` element and its children are `<mtd>` elements representing cells. This element is similar to the `<tr>` element of HTML.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr} */
  mtr: MathMLElementMtr;
  /**
   * The `<munder>` MathML element is used to attach an accent or a limit under an expression. It uses the following syntax: `<munder> base underscript </munder>`
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/munder} */
  munder: MathMLElementMunder;
  /**
   * The `<munderover>` MathML element is used to attach accents or limits both under and over an expression.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/munderover} */
  munderover: MathMLElementMunderover;
  /**
   * The `<semantics>` MathML element associates annotations with a MathML expression, for example its text source as a lightweight markup language or mathematical meaning expressed in a special XML dialect.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics} */
  semantics: MathMLElementSemantics;
}
