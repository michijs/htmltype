// file generated from @vscode/web-custom-data 0.5.2
// HTML Data Version 1.1
import type { AllAttributes } from "./AllAttributes";
import type { ValueSets } from "./ValueSets";
import type { GlobalEvents, WindowEvents } from "../Events";
import type { DataGlobalAttributes } from "../DataGlobalAttributes";
interface GlobalAttributes
  extends Pick<
    AllAttributes,
    | "accesskey"
    | "autocapitalize"
    | "autocorrect"
    | "autofocus"
    | "class"
    | "contenteditable"
    | "contextmenu"
    | "dir"
    | "draggable"
    | "dropzone"
    | "enterkeyhint"
    | "exportparts"
    | "hidden"
    | "id"
    | "inert"
    | "inputmode"
    | "is"
    | "itemid"
    | "itemprop"
    | "itemref"
    | "itemscope"
    | "itemtype"
    | "lang"
    | "nonce"
    | "part"
    | "popover"
    | "role"
    | "slot"
    | "spellcheck"
    | "style"
    | "tabindex"
    | "title"
    | "translate"
    | "virtualkeyboardpolicy"
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
    | "aria-disabled"
    | "aria-dropeffect"
    | "aria-errormessage"
    | "aria-expanded"
    | "aria-flowto"
    | "aria-grabbed"
    | "aria-haspopup"
    | "aria-hidden"
    | "aria-invalid"
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
    | "aria-details"
    | "aria-keyshortcuts"
  > {}

export interface HTMLAAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "href"
      | "target"
      | "download"
      | "ping"
      | "rel"
      | "hreflang"
      | "type"
      | "referrerpolicy"
    >,
    DataGlobalAttributes,
    GlobalEvents<I["a"] extends Element ? I["a"] : HTMLElementTagNameMap["a"]>,
    GlobalAttributes {}
export interface HTMLAbbrAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["abbr"] extends Element ? I["abbr"] : HTMLElementTagNameMap["abbr"]
    >,
    GlobalAttributes {}
export interface HTMLAddressAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["address"] extends Element
        ? I["address"]
        : HTMLElementTagNameMap["address"]
    >,
    GlobalAttributes {}
export interface HTMLAreaAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "alt"
      | "coords"
      | "shape"
      | "href"
      | "target"
      | "download"
      | "ping"
      | "rel"
      | "hreflang"
      | "type"
      | "accesskey"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["area"] extends Element ? I["area"] : HTMLElementTagNameMap["area"]
    >,
    GlobalAttributes {}
export interface HTMLArticleAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["article"] extends Element
        ? I["article"]
        : HTMLElementTagNameMap["article"]
    >,
    GlobalAttributes {}
export interface HTMLAsideAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["aside"] extends Element ? I["aside"] : HTMLElementTagNameMap["aside"]
    >,
    GlobalAttributes {}
export interface HTMLAudioAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "src"
      | "crossorigin"
      | "preload"
      | "autoplay"
      | "mediagroup"
      | "loop"
      | "muted"
      | "controls"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["audio"] extends Element ? I["audio"] : HTMLElementTagNameMap["audio"]
    >,
    GlobalAttributes {}
export interface HTMLBaseAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "href" | "target">,
    DataGlobalAttributes,
    GlobalEvents<
      I["base"] extends Element ? I["base"] : HTMLElementTagNameMap["base"]
    >,
    GlobalAttributes {}
export interface HTMLBAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["b"] extends Element ? I["b"] : HTMLElementTagNameMap["b"]>,
    GlobalAttributes {}
export interface HTMLBdiAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["bdi"] extends Element ? I["bdi"] : HTMLElementTagNameMap["bdi"]
    >,
    GlobalAttributes {}
export interface HTMLBdoAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["bdo"] extends Element ? I["bdo"] : HTMLElementTagNameMap["bdo"]
    >,
    GlobalAttributes {}
export interface HTMLBlockquoteAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cite">,
    DataGlobalAttributes,
    GlobalEvents<
      I["blockquote"] extends Element
        ? I["blockquote"]
        : HTMLElementTagNameMap["blockquote"]
    >,
    GlobalAttributes {}
export interface HTMLBodyAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "alink"
      | "background"
      | "bgcolor"
      | "bottommargin"
      | "leftmargin"
      | "link"
      | "rightmargin"
      | "text"
      | "topmargin"
      | "vlink"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["body"] extends Element ? I["body"] : HTMLElementTagNameMap["body"]
    >,
    WindowEvents<
      I["body"] extends Element ? I["body"] : HTMLElementTagNameMap["body"]
    >,
    GlobalAttributes {}
export interface HTMLBrAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "clear">,
    DataGlobalAttributes,
    GlobalEvents<
      I["br"] extends Element ? I["br"] : HTMLElementTagNameMap["br"]
    >,
    GlobalAttributes {}
export interface HTMLButtonAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "disabled"
      | "form"
      | "formaction"
      | "formenctype"
      | "formmethod"
      | "formnovalidate"
      | "formtarget"
      | "name"
      | "popovertarget"
      | "popovertargetaction"
      | "value"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["button"] extends Element
        ? I["button"]
        : HTMLElementTagNameMap["button"]
    >,
    GlobalAttributes {
  /**
   * The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn't return after refreshing the page"). */
  autocomplete?: ValueSets["default"];
  /**
   * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified. */
  autofocus?: ValueSets["v"];
  /**
   * The type of the button. Possible values are:
   *
   * *   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
   * *   `reset`: The button resets all the controls to their initial values.
   * *   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur. */
  type?: ValueSets["bt"];
}
export interface HTMLCanvasAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "width" | "height" | "moz-opaque">,
    DataGlobalAttributes,
    GlobalEvents<
      I["canvas"] extends Element
        ? I["canvas"]
        : HTMLElementTagNameMap["canvas"]
    >,
    GlobalAttributes {}
export interface HTMLCaptionAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["caption"] extends Element
        ? I["caption"]
        : HTMLElementTagNameMap["caption"]
    >,
    GlobalAttributes {}
export interface HTMLCiteAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["cite"] extends Element ? I["cite"] : HTMLElementTagNameMap["cite"]
    >,
    GlobalAttributes {}
export interface HTMLCodeAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["code"] extends Element ? I["code"] : HTMLElementTagNameMap["code"]
    >,
    GlobalAttributes {}
export interface HTMLColAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "span" | "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["col"] extends Element ? I["col"] : HTMLElementTagNameMap["col"]
    >,
    GlobalAttributes {}
export interface HTMLColgroupAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "span" | "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["colgroup"] extends Element
        ? I["colgroup"]
        : HTMLElementTagNameMap["colgroup"]
    >,
    GlobalAttributes {}
export interface HTMLDataAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "value">,
    DataGlobalAttributes,
    GlobalEvents<
      I["data"] extends Element ? I["data"] : HTMLElementTagNameMap["data"]
    >,
    GlobalAttributes {}
export interface HTMLDatalistAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["datalist"] extends Element
        ? I["datalist"]
        : HTMLElementTagNameMap["datalist"]
    >,
    GlobalAttributes {}
export interface HTMLDdAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "nowrap">,
    DataGlobalAttributes,
    GlobalEvents<
      I["dd"] extends Element ? I["dd"] : HTMLElementTagNameMap["dd"]
    >,
    GlobalAttributes {}
export interface HTMLDelAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cite" | "datetime">,
    DataGlobalAttributes,
    GlobalEvents<
      I["del"] extends Element ? I["del"] : HTMLElementTagNameMap["del"]
    >,
    GlobalAttributes {}
export interface HTMLDetailsAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "open">,
    DataGlobalAttributes,
    GlobalEvents<
      I["details"] extends Element
        ? I["details"]
        : HTMLElementTagNameMap["details"]
    >,
    GlobalAttributes {}
export interface HTMLDfnAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["dfn"] extends Element ? I["dfn"] : HTMLElementTagNameMap["dfn"]
    >,
    GlobalAttributes {}
export interface HTMLDialogAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["dialog"] extends Element
        ? I["dialog"]
        : HTMLElementTagNameMap["dialog"]
    >,
    GlobalAttributes {
  /**
   * Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user. */
  open?: ValueSets["default"];
}
export interface HTMLDivAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["div"] extends Element ? I["div"] : HTMLElementTagNameMap["div"]
    >,
    GlobalAttributes {}
export interface HTMLDlAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["dl"] extends Element ? I["dl"] : HTMLElementTagNameMap["dl"]
    >,
    GlobalAttributes {}
export interface HTMLDtAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["dt"] extends Element ? I["dt"] : HTMLElementTagNameMap["dt"]
    >,
    GlobalAttributes {}
export interface HTMLEmAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["em"] extends Element ? I["em"] : HTMLElementTagNameMap["em"]
    >,
    GlobalAttributes {}
export interface HTMLEmbedAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "src" | "type" | "width" | "height">,
    DataGlobalAttributes,
    GlobalEvents<
      I["embed"] extends Element ? I["embed"] : HTMLElementTagNameMap["embed"]
    >,
    GlobalAttributes {}
export interface HTMLFencedframeAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "allow" | "height" | "width">,
    DataGlobalAttributes,
    GlobalEvents<
      I["fencedframe"] extends Element ? I["fencedframe"] : HTMLElement
    >,
    GlobalAttributes {}
export interface HTMLFieldsetAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "disabled" | "form" | "name">,
    DataGlobalAttributes,
    GlobalEvents<
      I["fieldset"] extends Element
        ? I["fieldset"]
        : HTMLElementTagNameMap["fieldset"]
    >,
    GlobalAttributes {}
export interface HTMLFigcaptionAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["figcaption"] extends Element
        ? I["figcaption"]
        : HTMLElementTagNameMap["figcaption"]
    >,
    GlobalAttributes {}
export interface HTMLFigureAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["figure"] extends Element
        ? I["figure"]
        : HTMLElementTagNameMap["figure"]
    >,
    GlobalAttributes {}
export interface HTMLFooterAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["footer"] extends Element
        ? I["footer"]
        : HTMLElementTagNameMap["footer"]
    >,
    GlobalAttributes {}
export interface HTMLFormAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "accept-charset"
      | "action"
      | "autocomplete"
      | "enctype"
      | "method"
      | "name"
      | "novalidate"
      | "target"
      | "accept"
      | "autocapitalize"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["form"] extends Element ? I["form"] : HTMLElementTagNameMap["form"]
    >,
    GlobalAttributes {}
export interface HTMLH1Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h1"] extends Element ? I["h1"] : HTMLElementTagNameMap["h1"]
    >,
    GlobalAttributes {}
export interface HTMLH2Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h2"] extends Element ? I["h2"] : HTMLElementTagNameMap["h2"]
    >,
    GlobalAttributes {}
export interface HTMLH3Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h3"] extends Element ? I["h3"] : HTMLElementTagNameMap["h3"]
    >,
    GlobalAttributes {}
export interface HTMLH4Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h4"] extends Element ? I["h4"] : HTMLElementTagNameMap["h4"]
    >,
    GlobalAttributes {}
export interface HTMLH5Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h5"] extends Element ? I["h5"] : HTMLElementTagNameMap["h5"]
    >,
    GlobalAttributes {}
export interface HTMLH6Attributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["h6"] extends Element ? I["h6"] : HTMLElementTagNameMap["h6"]
    >,
    GlobalAttributes {}
export interface HTMLHeadAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "profile">,
    DataGlobalAttributes,
    GlobalEvents<
      I["head"] extends Element ? I["head"] : HTMLElementTagNameMap["head"]
    >,
    GlobalAttributes {}
export interface HTMLHeaderAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["header"] extends Element
        ? I["header"]
        : HTMLElementTagNameMap["header"]
    >,
    GlobalAttributes {}
export interface HTMLHgroupAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["hgroup"] extends Element
        ? I["hgroup"]
        : HTMLElementTagNameMap["hgroup"]
    >,
    GlobalAttributes {}
export interface HTMLHrAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align" | "color" | "noshade" | "size" | "width">,
    DataGlobalAttributes,
    GlobalEvents<
      I["hr"] extends Element ? I["hr"] : HTMLElementTagNameMap["hr"]
    >,
    GlobalAttributes {}
export interface HTMLHtmlAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "manifest" | "version" | "xmlns">,
    DataGlobalAttributes,
    GlobalEvents<
      I["html"] extends Element ? I["html"] : HTMLElementTagNameMap["html"]
    >,
    GlobalAttributes {}
export interface HTMLIAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["i"] extends Element ? I["i"] : HTMLElementTagNameMap["i"]>,
    GlobalAttributes {}
export interface HTMLIframeAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "src"
      | "srcdoc"
      | "name"
      | "sandbox"
      | "seamless"
      | "allowfullscreen"
      | "width"
      | "height"
      | "allow"
      | "allowpaymentrequest"
      | "allowpaymentrequest"
      | "csp"
      | "importance"
      | "referrerpolicy"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["iframe"] extends Element
        ? I["iframe"]
        : HTMLElementTagNameMap["iframe"]
    >,
    GlobalAttributes {}
export interface HTMLImgAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "alt"
      | "src"
      | "srcset"
      | "crossorigin"
      | "usemap"
      | "ismap"
      | "width"
      | "height"
      | "decoding"
      | "loading"
      | "fetchpriority"
      | "sizes"
      | "importance"
      | "importance"
      | "intrinsicsize"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["img"] extends Element ? I["img"] : HTMLElementTagNameMap["img"]
    >,
    GlobalAttributes {
  /**
   * A string indicating which referrer to use when fetching the resource:
   *
   * *   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
   * *   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.
   * *   `origin:` The `Referer` header will include the page of origin's scheme, the host, and the port.
   * *   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.
   * *   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins. */
  referrerpolicy?: ValueSets["referrerpolicy"];
}
export interface HTMLInputAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "accept"
      | "alt"
      | "checked"
      | "dirname"
      | "disabled"
      | "form"
      | "formaction"
      | "formenctype"
      | "formmethod"
      | "formnovalidate"
      | "formtarget"
      | "height"
      | "list"
      | "max"
      | "maxlength"
      | "min"
      | "minlength"
      | "multiple"
      | "name"
      | "pattern"
      | "placeholder"
      | "popovertarget"
      | "popovertargetaction"
      | "readonly"
      | "required"
      | "size"
      | "src"
      | "step"
      | "value"
      | "width"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["input"] extends Element ? I["input"] : HTMLElementTagNameMap["input"]
    >,
    GlobalAttributes {
  autocomplete?: ValueSets["inputautocomplete"];
  autofocus?: ValueSets["v"];
  inputmode?: ValueSets["im"];
  type?: ValueSets["t"];
}
export interface HTMLInsAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cite" | "datetime">,
    DataGlobalAttributes,
    GlobalEvents<
      I["ins"] extends Element ? I["ins"] : HTMLElementTagNameMap["ins"]
    >,
    GlobalAttributes {}
export interface HTMLKbdAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["kbd"] extends Element ? I["kbd"] : HTMLElementTagNameMap["kbd"]
    >,
    GlobalAttributes {}
export interface HTMLLabelAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "form" | "for">,
    DataGlobalAttributes,
    GlobalEvents<
      I["label"] extends Element ? I["label"] : HTMLElementTagNameMap["label"]
    >,
    GlobalAttributes {}
export interface HTMLLegendAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["legend"] extends Element
        ? I["legend"]
        : HTMLElementTagNameMap["legend"]
    >,
    GlobalAttributes {}
export interface HTMLLiAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "value" | "type">,
    DataGlobalAttributes,
    GlobalEvents<
      I["li"] extends Element ? I["li"] : HTMLElementTagNameMap["li"]
    >,
    GlobalAttributes {}
export interface HTMLLinkAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "href"
      | "crossorigin"
      | "rel"
      | "media"
      | "hreflang"
      | "type"
      | "sizes"
      | "as"
      | "importance"
      | "importance"
      | "integrity"
      | "referrerpolicy"
      | "title"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["link"] extends Element ? I["link"] : HTMLElementTagNameMap["link"]
    >,
    GlobalAttributes {}
export interface HTMLMainAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["main"] extends Element ? I["main"] : HTMLElementTagNameMap["main"]
    >,
    GlobalAttributes {}
export interface HTMLMapAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "name">,
    DataGlobalAttributes,
    GlobalEvents<
      I["map"] extends Element ? I["map"] : HTMLElementTagNameMap["map"]
    >,
    GlobalAttributes {}
export interface HTMLMarkAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["mark"] extends Element ? I["mark"] : HTMLElementTagNameMap["mark"]
    >,
    GlobalAttributes {}
export interface HTMLMenuAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["menu"] extends Element ? I["menu"] : HTMLElementTagNameMap["menu"]
    >,
    GlobalAttributes {}
export interface HTMLMetaAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "name" | "http-equiv" | "content" | "charset" | "scheme"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["meta"] extends Element ? I["meta"] : HTMLElementTagNameMap["meta"]
    >,
    GlobalAttributes {}
export interface HTMLMeterAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "value" | "min" | "max" | "low" | "high" | "optimum" | "form"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["meter"] extends Element ? I["meter"] : HTMLElementTagNameMap["meter"]
    >,
    GlobalAttributes {}
export interface HTMLNavAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["nav"] extends Element ? I["nav"] : HTMLElementTagNameMap["nav"]
    >,
    GlobalAttributes {}
export interface HTMLNoscriptAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["noscript"] extends Element
        ? I["noscript"]
        : HTMLElementTagNameMap["noscript"]
    >,
    GlobalAttributes {}
export interface HTMLObjectAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "data"
      | "type"
      | "typemustmatch"
      | "name"
      | "usemap"
      | "form"
      | "width"
      | "height"
      | "archive"
      | "border"
      | "classid"
      | "codebase"
      | "codetype"
      | "declare"
      | "standby"
      | "tabindex"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["object"] extends Element
        ? I["object"]
        : HTMLElementTagNameMap["object"]
    >,
    GlobalAttributes {}
export interface HTMLOlAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "reversed" | "start" | "compact">,
    DataGlobalAttributes,
    GlobalEvents<
      I["ol"] extends Element ? I["ol"] : HTMLElementTagNameMap["ol"]
    >,
    GlobalAttributes {
  /**
   * Indicates the numbering type:
   *
   * *   `'a'` indicates lowercase letters,
   * *   `'A'` indicates uppercase letters,
   * *   `'i'` indicates lowercase Roman numerals,
   * *   `'I'` indicates uppercase Roman numerals,
   * *   and `'1'` indicates numbers (default).
   *
   * The type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li "The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.") element.
   *
   * **Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.
   *
   * Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property should be used instead. */
  type?: ValueSets["lt"];
}
export interface HTMLOptgroupAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "disabled" | "label">,
    DataGlobalAttributes,
    GlobalEvents<
      I["optgroup"] extends Element
        ? I["optgroup"]
        : HTMLElementTagNameMap["optgroup"]
    >,
    GlobalAttributes {}
export interface HTMLOptionAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "disabled" | "label" | "selected" | "value">,
    DataGlobalAttributes,
    GlobalEvents<
      I["option"] extends Element
        ? I["option"]
        : HTMLElementTagNameMap["option"]
    >,
    GlobalAttributes {}
export interface HTMLOutputAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "for" | "form" | "name">,
    DataGlobalAttributes,
    GlobalEvents<
      I["output"] extends Element
        ? I["output"]
        : HTMLElementTagNameMap["output"]
    >,
    GlobalAttributes {}
export interface HTMLParamAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "name" | "value" | "type" | "valuetype">,
    DataGlobalAttributes,
    GlobalEvents<I["param"] extends Element ? I["param"] : HTMLElement>,
    GlobalAttributes {}
export interface HTMLPAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["p"] extends Element ? I["p"] : HTMLElementTagNameMap["p"]>,
    GlobalAttributes {}
export interface HTMLPictureAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["picture"] extends Element
        ? I["picture"]
        : HTMLElementTagNameMap["picture"]
    >,
    GlobalAttributes {}
export interface HTMLPreAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cols" | "width" | "wrap">,
    DataGlobalAttributes,
    GlobalEvents<
      I["pre"] extends Element ? I["pre"] : HTMLElementTagNameMap["pre"]
    >,
    GlobalAttributes {}
export interface HTMLProgressAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "value" | "max">,
    DataGlobalAttributes,
    GlobalEvents<
      I["progress"] extends Element
        ? I["progress"]
        : HTMLElementTagNameMap["progress"]
    >,
    GlobalAttributes {}
export interface HTMLQAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "cite">,
    DataGlobalAttributes,
    GlobalEvents<I["q"] extends Element ? I["q"] : HTMLElementTagNameMap["q"]>,
    GlobalAttributes {}
export interface HTMLRbAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["rb"] extends Element ? I["rb"] : HTMLElement>,
    GlobalAttributes {}
export interface HTMLRpAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["rp"] extends Element ? I["rp"] : HTMLElementTagNameMap["rp"]
    >,
    GlobalAttributes {}
export interface HTMLRtAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["rt"] extends Element ? I["rt"] : HTMLElementTagNameMap["rt"]
    >,
    GlobalAttributes {}
export interface HTMLRubyAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["ruby"] extends Element ? I["ruby"] : HTMLElementTagNameMap["ruby"]
    >,
    GlobalAttributes {}
export interface HTMLSampAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["samp"] extends Element ? I["samp"] : HTMLElementTagNameMap["samp"]
    >,
    GlobalAttributes {}
export interface HTMLSAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["s"] extends Element ? I["s"] : HTMLElementTagNameMap["s"]>,
    GlobalAttributes {}
export interface HTMLScriptAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "src"
      | "type"
      | "charset"
      | "async"
      | "defer"
      | "crossorigin"
      | "nonce"
      | "integrity"
      | "nomodule"
      | "referrerpolicy"
      | "text"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["script"] extends Element
        ? I["script"]
        : HTMLElementTagNameMap["script"]
    >,
    GlobalAttributes {}
export interface HTMLSearchAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["search"] extends Element
        ? I["search"]
        : HTMLElementTagNameMap["search"]
    >,
    GlobalAttributes {}
export interface HTMLSectionAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["section"] extends Element
        ? I["section"]
        : HTMLElementTagNameMap["section"]
    >,
    GlobalAttributes {}
export interface HTMLSelectAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "disabled" | "form" | "multiple" | "name" | "required" | "size"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["select"] extends Element
        ? I["select"]
        : HTMLElementTagNameMap["select"]
    >,
    GlobalAttributes {
  /**
   * A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent's](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent's: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete. */
  autocomplete?: ValueSets["inputautocomplete"];
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute. */
  autofocus?: ValueSets["v"];
}
export interface HTMLSelectedcontentAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["selectedcontent"] extends Element ? I["selectedcontent"] : HTMLElement
    >,
    GlobalAttributes {}
export interface HTMLSlotAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "name">,
    DataGlobalAttributes,
    GlobalEvents<
      I["slot"] extends Element ? I["slot"] : HTMLElementTagNameMap["slot"]
    >,
    GlobalAttributes {}
export interface HTMLSmallAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["small"] extends Element ? I["small"] : HTMLElementTagNameMap["small"]
    >,
    GlobalAttributes {}
export interface HTMLSourceAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "src" | "type" | "sizes" | "srcset" | "media">,
    DataGlobalAttributes,
    GlobalEvents<
      I["source"] extends Element
        ? I["source"]
        : HTMLElementTagNameMap["source"]
    >,
    GlobalAttributes {}
export interface HTMLSpanAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["span"] extends Element ? I["span"] : HTMLElementTagNameMap["span"]
    >,
    GlobalAttributes {}
export interface HTMLStrongAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["strong"] extends Element
        ? I["strong"]
        : HTMLElementTagNameMap["strong"]
    >,
    GlobalAttributes {}
export interface HTMLStyleAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "media" | "nonce" | "type" | "scoped" | "title">,
    DataGlobalAttributes,
    GlobalEvents<
      I["style"] extends Element ? I["style"] : HTMLElementTagNameMap["style"]
    >,
    GlobalAttributes {}
export interface HTMLSubAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["sub"] extends Element ? I["sub"] : HTMLElementTagNameMap["sub"]
    >,
    GlobalAttributes {}
export interface HTMLSummaryAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["summary"] extends Element
        ? I["summary"]
        : HTMLElementTagNameMap["summary"]
    >,
    GlobalAttributes {}
export interface HTMLSupAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["sup"] extends Element ? I["sup"] : HTMLElementTagNameMap["sup"]
    >,
    GlobalAttributes {}
export interface HTMLTableAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "border" | "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["table"] extends Element ? I["table"] : HTMLElementTagNameMap["table"]
    >,
    GlobalAttributes {}
export interface HTMLTbodyAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["tbody"] extends Element ? I["tbody"] : HTMLElementTagNameMap["tbody"]
    >,
    GlobalAttributes {}
export interface HTMLTdAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      "colspan" | "rowspan" | "headers" | "abbr" | "align" | "axis" | "bgcolor"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["td"] extends Element ? I["td"] : HTMLElementTagNameMap["td"]
    >,
    GlobalAttributes {}
export interface HTMLTemplateAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["template"] extends Element
        ? I["template"]
        : HTMLElementTagNameMap["template"]
    >,
    GlobalAttributes {}
export interface HTMLTextareaAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "cols"
      | "dirname"
      | "disabled"
      | "form"
      | "maxlength"
      | "minlength"
      | "name"
      | "placeholder"
      | "readonly"
      | "required"
      | "rows"
      | "autocapitalize"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["textarea"] extends Element
        ? I["textarea"]
        : HTMLElementTagNameMap["textarea"]
    >,
    GlobalAttributes {
  /**
   * This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:
   *
   * *   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
   * *   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.
   *
   * If the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element's form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."). */
  autocomplete?: ValueSets["inputautocomplete"];
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified. */
  autofocus?: ValueSets["v"];
  inputmode?: ValueSets["im"];
  /**
   * Indicates how the control wraps text. Possible values are:
   *
   * *   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.
   * *   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.
   * *   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.
   *
   * If this attribute is not specified, `soft` is its default value. */
  wrap?: ValueSets["w"];
}
export interface HTMLTfootAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["tfoot"] extends Element ? I["tfoot"] : HTMLElementTagNameMap["tfoot"]
    >,
    GlobalAttributes {}
export interface HTMLThAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "colspan"
      | "rowspan"
      | "headers"
      | "scope"
      | "sorted"
      | "abbr"
      | "align"
      | "axis"
      | "bgcolor"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["th"] extends Element ? I["th"] : HTMLElementTagNameMap["th"]
    >,
    GlobalAttributes {}
export interface HTMLTheadAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["thead"] extends Element ? I["thead"] : HTMLElementTagNameMap["thead"]
    >,
    GlobalAttributes {}
export interface HTMLTimeAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "datetime">,
    DataGlobalAttributes,
    GlobalEvents<
      I["time"] extends Element ? I["time"] : HTMLElementTagNameMap["time"]
    >,
    GlobalAttributes {}
export interface HTMLTitleAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["title"] extends Element ? I["title"] : HTMLElementTagNameMap["title"]
    >,
    GlobalAttributes {}
export interface HTMLTrackAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "default" | "kind" | "label" | "src" | "srclang">,
    DataGlobalAttributes,
    GlobalEvents<
      I["track"] extends Element ? I["track"] : HTMLElementTagNameMap["track"]
    >,
    GlobalAttributes {}
export interface HTMLTrAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "align">,
    DataGlobalAttributes,
    GlobalEvents<
      I["tr"] extends Element ? I["tr"] : HTMLElementTagNameMap["tr"]
    >,
    GlobalAttributes {}
export interface HTMLUAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<I["u"] extends Element ? I["u"] : HTMLElementTagNameMap["u"]>,
    GlobalAttributes {}
export interface HTMLUlAttributes<I extends Record<string, {}>>
  extends Pick<AllAttributes, "compact">,
    DataGlobalAttributes,
    GlobalEvents<
      I["ul"] extends Element ? I["ul"] : HTMLElementTagNameMap["ul"]
    >,
    GlobalAttributes {}
export interface HTMLVarAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["var"] extends Element ? I["var"] : HTMLElementTagNameMap["var"]
    >,
    GlobalAttributes {}
export interface HTMLVideoAttributes<I extends Record<string, {}>>
  extends Pick<
      AllAttributes,
      | "src"
      | "crossorigin"
      | "poster"
      | "preload"
      | "autoplay"
      | "mediagroup"
      | "loop"
      | "muted"
      | "controls"
      | "width"
      | "height"
    >,
    DataGlobalAttributes,
    GlobalEvents<
      I["video"] extends Element ? I["video"] : HTMLElementTagNameMap["video"]
    >,
    GlobalAttributes {}
export interface HTMLWbrAttributes<I extends Record<string, {}>>
  extends DataGlobalAttributes,
    GlobalEvents<
      I["wbr"] extends Element ? I["wbr"] : HTMLElementTagNameMap["wbr"]
    >,
    GlobalAttributes {}
export interface HTMLElements<I extends {} = {}> {
  /**
   * If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a} */
  a: HTMLAAttributes<I>;
  /**
   * The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr} */
  abbr: HTMLAbbrAttributes<I>;
  /**
   * The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address} */
  address: HTMLAddressAttributes<I>;
  /**
   * The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area} */
  area: HTMLAreaAttributes<I>;
  /**
   * The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article} */
  article: HTMLArticleAttributes<I>;
  /**
   * The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside} */
  aside: HTMLAsideAttributes<I>;
  /**
   * An audio element represents a sound or audio stream.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio} */
  audio: HTMLAudioAttributes<I>;
  /**
   * The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b} */
  b: HTMLBAttributes<I>;
  /**
   * The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base} */
  base: HTMLBaseAttributes<I>;
  /**
   * The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi} */
  bdi: HTMLBdiAttributes<I>;
  /**
   * The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo} */
  bdo: HTMLBdoAttributes<I>;
  /**
   * The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote} */
  blockquote: HTMLBlockquoteAttributes<I>;
  /**
   * The body element represents the content of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body} */
  body: HTMLBodyAttributes<I>;
  /**
   * The br element represents a line break.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br} */
  br: HTMLBrAttributes<I>;
  /**
   * The button element represents a button labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button} */
  button: HTMLButtonAttributes<I>;
  /**
   * The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas} */
  canvas: HTMLCanvasAttributes<I>;
  /**
   * The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption} */
  caption: HTMLCaptionAttributes<I>;
  /**
   * The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite} */
  cite: HTMLCiteAttributes<I>;
  /**
   * The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code} */
  code: HTMLCodeAttributes<I>;
  /**
   * If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col} */
  col: HTMLColAttributes<I>;
  /**
   * The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup} */
  colgroup: HTMLColgroupAttributes<I>;
  /**
   * The data element links a given piece of content with a machine-readable translation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data} */
  data: HTMLDataAttributes<I>;
  /**
   * The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist} */
  datalist: HTMLDatalistAttributes<I>;
  /**
   * The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd} */
  dd: HTMLDdAttributes<I>;
  /**
   * The del element represents a removal from the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del} */
  del: HTMLDelAttributes<I>;
  /**
   * The details element represents a disclosure widget from which the user can obtain additional information or controls.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details} */
  details: HTMLDetailsAttributes<I>;
  /**
   * The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn} */
  dfn: HTMLDfnAttributes<I>;
  /**
   * The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog} */
  dialog: HTMLDialogAttributes<I>;
  /**
   * The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div} */
  div: HTMLDivAttributes<I>;
  /**
   * The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl} */
  dl: HTMLDlAttributes<I>;
  /**
   * The dt element represents the term, or name, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt} */
  dt: HTMLDtAttributes<I>;
  /**
   * The em element represents stress emphasis of its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em} */
  em: HTMLEmAttributes<I>;
  /**
   * The embed element provides an integration point for an external (typically non-HTML) application or interactive content.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed} */
  embed: HTMLEmbedAttributes<I>;
  /**
   * The fencedframe element represents a nested browsing context, embedding another HTML page into the current one.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe} */
  fencedframe: HTMLFencedframeAttributes<I>;
  /**
   * The fieldset element represents a set of form controls optionally grouped under a common name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset} */
  fieldset: HTMLFieldsetAttributes<I>;
  /**
   * The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption} */
  figcaption: HTMLFigcaptionAttributes<I>;
  /**
   * The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure} */
  figure: HTMLFigureAttributes<I>;
  /**
   * The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer} */
  footer: HTMLFooterAttributes<I>;
  /**
   * The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form} */
  form: HTMLFormAttributes<I>;
  /**
   * The h1 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h1: HTMLH1Attributes<I>;
  /**
   * The h2 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h2: HTMLH2Attributes<I>;
  /**
   * The h3 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h3: HTMLH3Attributes<I>;
  /**
   * The h4 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h4: HTMLH4Attributes<I>;
  /**
   * The h5 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h5: HTMLH5Attributes<I>;
  /**
   * The h6 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements} */
  h6: HTMLH6Attributes<I>;
  /**
   * The head element represents a collection of metadata for the Document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head} */
  head: HTMLHeadAttributes<I>;
  /**
   * The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header} */
  header: HTMLHeaderAttributes<I>;
  /**
   * The hgroup element represents a heading and related content. It groups a single h1–h6 element with one or more p.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup} */
  hgroup: HTMLHgroupAttributes<I>;
  /**
   * The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr} */
  hr: HTMLHrAttributes<I>;
  /**
   * The html element represents the root of an HTML document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html} */
  html: HTMLHtmlAttributes<I>;
  /**
   * The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i} */
  i: HTMLIAttributes<I>;
  /**
   * The iframe element represents a nested browsing context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe} */
  iframe: HTMLIframeAttributes<I>;
  /**
   * An img element represents an image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img} */
  img: HTMLImgAttributes<I>;
  /**
   * The input element represents a typed data field, usually with a form control to allow the user to edit the data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input} */
  input: HTMLInputAttributes<I>;
  /**
   * The ins element represents an addition to the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins} */
  ins: HTMLInsAttributes<I>;
  /**
   * The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd} */
  kbd: HTMLKbdAttributes<I>;
  /**
   * The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label} */
  label: HTMLLabelAttributes<I>;
  /**
   * The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend} */
  legend: HTMLLegendAttributes<I>;
  /**
   * The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li} */
  li: HTMLLiAttributes<I>;
  /**
   * The link element allows authors to link their document to other resources.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link} */
  link: HTMLLinkAttributes<I>;
  /**
   * The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main} */
  main: HTMLMainAttributes<I>;
  /**
   * The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map} */
  map: HTMLMapAttributes<I>;
  /**
   * The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark} */
  mark: HTMLMarkAttributes<I>;
  /**
   * The menu element represents an unordered list of interactive items.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu} */
  menu: HTMLMenuAttributes<I>;
  /**
   * The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta} */
  meta: HTMLMetaAttributes<I>;
  /**
   * The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter} */
  meter: HTMLMeterAttributes<I>;
  /**
   * The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav} */
  nav: HTMLNavAttributes<I>;
  /**
   * The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript} */
  noscript: HTMLNoscriptAttributes<I>;
  /**
   * The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object} */
  object: HTMLObjectAttributes<I>;
  /**
   * The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol} */
  ol: HTMLOlAttributes<I>;
  /**
   * The optgroup element represents a group of option elements with a common label.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup} */
  optgroup: HTMLOptgroupAttributes<I>;
  /**
   * The option element represents an option in a select element or as part of a list of suggestions in a datalist element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option} */
  option: HTMLOptionAttributes<I>;
  /**
   * The output element represents the result of a calculation performed by the application, or the result of a user action.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output} */
  output: HTMLOutputAttributes<I>;
  /**
   * The p element represents a paragraph.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p} */
  p: HTMLPAttributes<I>;
  /**
   * The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param} */
  param: HTMLParamAttributes<I>;
  /**
   * The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture} */
  picture: HTMLPictureAttributes<I>;
  /**
   * The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre} */
  pre: HTMLPreAttributes<I>;
  /**
   * The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress} */
  progress: HTMLProgressAttributes<I>;
  /**
   * The q element represents some phrasing content quoted from another source.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q} */
  q: HTMLQAttributes<I>;
  /**
   * The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb} */
  rb: HTMLRbAttributes<I>;
  /**
   * The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp} */
  rp: HTMLRpAttributes<I>;
  /**
   * The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt} */
  rt: HTMLRtAttributes<I>;
  /**
   * The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby} */
  ruby: HTMLRubyAttributes<I>;
  /**
   * The s element represents contents that are no longer accurate or no longer relevant.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s} */
  s: HTMLSAttributes<I>;
  /**
   * The samp element represents sample or quoted output from another program or computing system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp} */
  samp: HTMLSampAttributes<I>;
  /**
   * The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script} */
  script: HTMLScriptAttributes<I>;
  /**
   * The search element represents the parts of the document or application with form controls or other content related to performing a search or filtering operation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search} */
  search: HTMLSearchAttributes<I>;
  /**
   * The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section} */
  section: HTMLSectionAttributes<I>;
  /**
   * The select element represents a control for selecting amongst a set of options.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select} */
  select: HTMLSelectAttributes<I>;
  /**
   * The selectedcontent element can be used to display the content of the currently selected option element inside of a closed select element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent} */
  selectedcontent: HTMLSelectedcontentAttributes<I>;
  /**
   * The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot} */
  slot: HTMLSlotAttributes<I>;
  /**
   * The small element represents side comments such as small print.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small} */
  small: HTMLSmallAttributes<I>;
  /**
   * The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source} */
  source: HTMLSourceAttributes<I>;
  /**
   * The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span} */
  span: HTMLSpanAttributes<I>;
  /**
   * The strong element represents strong importance, seriousness, or urgency for its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong} */
  strong: HTMLStrongAttributes<I>;
  /**
   * The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style} */
  style: HTMLStyleAttributes<I>;
  /**
   * The sub element represents a subscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub} */
  sub: HTMLSubAttributes<I>;
  /**
   * The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary} */
  summary: HTMLSummaryAttributes<I>;
  /**
   * The sup element represents a superscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup} */
  sup: HTMLSupAttributes<I>;
  /**
   * The table element represents data with more than one dimension, in the form of a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table} */
  table: HTMLTableAttributes<I>;
  /**
   * The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody} */
  tbody: HTMLTbodyAttributes<I>;
  /**
   * The td element represents a data cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td} */
  td: HTMLTdAttributes<I>;
  /**
   * The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template} */
  template: HTMLTemplateAttributes<I>;
  /**
   * The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea} */
  textarea: HTMLTextareaAttributes<I>;
  /**
   * The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot} */
  tfoot: HTMLTfootAttributes<I>;
  /**
   * The th element represents a header cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th} */
  th: HTMLThAttributes<I>;
  /**
   * The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead} */
  thead: HTMLTheadAttributes<I>;
  /**
   * The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time} */
  time: HTMLTimeAttributes<I>;
  /**
   * The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title} */
  title: HTMLTitleAttributes<I>;
  /**
   * The tr element represents a row of cells in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr} */
  tr: HTMLTrAttributes<I>;
  /**
   * The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track} */
  track: HTMLTrackAttributes<I>;
  /**
   * The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u} */
  u: HTMLUAttributes<I>;
  /**
   * The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul} */
  ul: HTMLUlAttributes<I>;
  /**
   * The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var} */
  var: HTMLVarAttributes<I>;
  /**
   * A video element is used for playing videos or movies, and audio files with captions.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video} */
  video: HTMLVideoAttributes<I>;
  /**
   * The wbr element represents a line break opportunity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr} */
  wbr: HTMLWbrAttributes<I>;
}
