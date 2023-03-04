// file generated from @vscode/web-custom-data NPM package
// HTML Data Version 1.1
import { ValueSets } from "./ValueSets";
import { CSSProperties } from "../../types";

export type GlobalAttributes = {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey}*/
  accesskey?: ValueSets["default"];

  /**
* Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:

*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
*   `characters`, all letters should default to uppercase
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize}*/
  autocapitalize?: ValueSets["default"];

  /**
   * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class}*/
  class?: ValueSets["default"];

  /**
* An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:

*   `true` or the _empty string_, which indicates that the element must be editable;
*   `false`, which indicates that the element must not be editable.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable}*/
  contenteditable?: ValueSets["default"];

  /**
   * The `[**id**](#attr-id)` of a [`<menu>`](https://developer.mozilla.org/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu}*/
  contextmenu?: ValueSets["default"];

  /**
* An enumerated attribute indicating the directionality of the element's text. It can have the following values:

*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir}*/
  dir?: ValueSets["d"];

  /**
* An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:

*   `true`, which indicates that the element may be dragged
*   `false`, which indicates that the element may not be dragged.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable}*/
  draggable?: ValueSets["b"];

  /**
* An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:

*   `copy`, which indicates that dropping will create a copy of the element that was dragged
*   `move`, which indicates that the element that was dragged will be moved to this new location.
*   `link`, will create a link to the dragged data.
*/
  dropzone?: ValueSets["default"];

  /**
   * Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts}*/
  exportparts?: ValueSets["default"];

  /**
   * A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden}*/
  hidden?: ValueSets["v"];

  /**
   * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id}*/
  id?: ValueSets["default"];

  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode}*/
  inputmode?: ValueSets["default"];

  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements) for more details).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is}*/
  is?: ValueSets["default"];

  /**
   * The unique, global identifier of an item.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid}*/
  itemid?: ValueSets["default"];

  /**
   * Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop}*/
  itemprop?: ValueSets["default"];

  /**
   * Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref}*/
  itemref?: ValueSets["default"];

  /**
   * `itemscope` (usually) works along with `[itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope}*/
  itemscope?: ValueSets["v"];

  /**
   * Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype}*/
  itemtype?: ValueSets["default"];

  /**
   * Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang}*/
  lang?: ValueSets["default"];

  /**
   * A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](https://developer.mozilla.org/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part}*/
  part?: ValueSets["default"];

  role?: ValueSets["roles"];

  /**
   * Assigns a slot in a [shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](https://developer.mozilla.org/docs/Web/HTML/Element/slot "The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element whose `[name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name)` attribute's value matches that `slot` attribute's value.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot}*/
  slot?: ValueSets["default"];

  /**
* An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:

*   `true`, which indicates that the element should be, if possible, checked for spelling errors;
*   `false`, which indicates that the element should not be checked for spelling errors.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck}*/
  spellcheck?: ValueSets["b"];

  /**
   * Contains [CSS](https://developer.mozilla.org/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](https://developer.mozilla.org/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style}*/
  style?: CSSProperties;

  /**
* An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
*   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex}*/
  tabindex?: ValueSets["default"];

  /**
   * Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title}*/
  title?: ValueSets["default"];

  /**
* An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](https://developer.mozilla.org/docs/Web/API/Text "The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:

*   empty string and `yes`, which indicates that the element will be translated.
*   `no`, which indicates that the element will not be translated.
* 
* [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate}*/
  translate?: ValueSets["y"];

  /**
   * Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant}*/
  ["aria-activedescendant"]?: ValueSets["default"];

  /**
   * Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-atomic}*/
  ["aria-atomic"]?: ValueSets["b"];

  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete}*/
  ["aria-autocomplete"]?: ValueSets["autocomplete"];

  /**
   * Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-busy}*/
  ["aria-busy"]?: ValueSets["b"];

  /**
   * Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-checked}*/
  ["aria-checked"]?: ValueSets["tristate"];

  /**
   * Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-colcount}*/
  ["aria-colcount"]?: ValueSets["default"];

  /**
   * Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-colindex}*/
  ["aria-colindex"]?: ValueSets["default"];

  /**
   * Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-colspan}*/
  ["aria-colspan"]?: ValueSets["default"];

  /**
   * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-controls}*/
  ["aria-controls"]?: ValueSets["default"];

  /**
   * Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-current}*/
  ["aria-current"]?: ValueSets["current"];

  /**
   * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-describedby}*/
  ["aria-describedby"]?: ValueSets["default"];

  /**
   * Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-disabled}*/
  ["aria-disabled"]?: ValueSets["b"];

  /**
   * \[Deprecated in ARIA 1.1\] Indicates what functions can be performed when a dragged object is released on the drop target.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect}*/
  ["aria-dropeffect"]?: ValueSets["dropeffect"];

  /**
   * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage}*/
  ["aria-errormessage"]?: ValueSets["default"];

  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-expanded}*/
  ["aria-expanded"]?: ValueSets["u"];

  /**
   * Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-flowto}*/
  ["aria-flowto"]?: ValueSets["default"];

  /**
   * \[Deprecated in ARIA 1.1\] Indicates an element's "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed}*/
  ["aria-grabbed"]?: ValueSets["u"];

  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup}*/
  ["aria-haspopup"]?: ValueSets["haspopup"];

  /**
   * Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-hidden}*/
  ["aria-hidden"]?: ValueSets["b"];

  /**
   * Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-invalid}*/
  ["aria-invalid"]?: ValueSets["invalid"];

  /**
   * Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-label}*/
  ["aria-label"]?: ValueSets["default"];

  /**
   * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby}*/
  ["aria-labelledby"]?: ValueSets["default"];

  /**
   * Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level}*/
  ["aria-level"]?: ValueSets["default"];

  /**
   * Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-live}*/
  ["aria-live"]?: ValueSets["live"];

  /**
   * Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-modal}*/
  ["aria-modal"]?: ValueSets["b"];

  /**
   * Indicates whether a text box accepts multiple lines of input or only a single line.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-multiline}*/
  ["aria-multiline"]?: ValueSets["b"];

  /**
   * Indicates that the user may select more than one item from the current selectable descendants.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable}*/
  ["aria-multiselectable"]?: ValueSets["b"];

  /**
   * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-orientation}*/
  ["aria-orientation"]?: ValueSets["orientation"];

  /**
   * Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-owns}*/
  ["aria-owns"]?: ValueSets["default"];

  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder}*/
  ["aria-placeholder"]?: ValueSets["default"];

  /**
   * Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-posinset}*/
  ["aria-posinset"]?: ValueSets["default"];

  /**
   * Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-pressed}*/
  ["aria-pressed"]?: ValueSets["tristate"];

  /**
   * Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-readonly}*/
  ["aria-readonly"]?: ValueSets["b"];

  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-relevant}*/
  ["aria-relevant"]?: ValueSets["relevant"];

  /**
   * Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-required}*/
  ["aria-required"]?: ValueSets["b"];

  /**
   * Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription}*/
  ["aria-roledescription"]?: ValueSets["default"];

  /**
   * Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount}*/
  ["aria-rowcount"]?: ValueSets["default"];

  /**
   * Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex}*/
  ["aria-rowindex"]?: ValueSets["default"];

  /**
   * Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan}*/
  ["aria-rowspan"]?: ValueSets["default"];

  /**
   * Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-selected}*/
  ["aria-selected"]?: ValueSets["u"];

  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-setsize}*/
  ["aria-setsize"]?: ValueSets["default"];

  /**
   * Indicates if items in a table or grid are sorted in ascending or descending order.
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-sort}*/
  ["aria-sort"]?: ValueSets["sort"];

  /**
   * Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax}*/
  ["aria-valuemax"]?: ValueSets["default"];

  /**
   * Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin}*/
  ["aria-valuemin"]?: ValueSets["default"];

  /**
   * Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow}*/
  ["aria-valuenow"]?: ValueSets["default"];

  /**
   * Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
   *
   * [WAI-ARIA Reference] {@link https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext}*/
  ["aria-valuetext"]?: ValueSets["default"];

  /**
   * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
   */
  ["aria-details"]?: ValueSets["default"];

  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   */
  ["aria-keyshortcuts"]?: ValueSets["default"];
} & {
  /**
   * The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
   */
  [k in `data-${string}`]: string;
};
