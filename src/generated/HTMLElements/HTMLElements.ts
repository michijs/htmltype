// file generated from @vscode/web-custom-data NPM package
// HTML Data Version 1.1
import { ValueSets } from "./ValueSets";
import { GlobalAttributes } from "./GlobalAttributes";
import {
  GlobalEvents,
  WindowEvents,
} from "../../Events";

export interface HTMLElements {
  /**
   * The html element represents the root of an HTML document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/html}*/
  html: {
    /**
     * Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details.
     */
    manifest?: ValueSets["default"];
    /**
     * Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called “quirks mode” when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.
     */
    version?: ValueSets["default"];
    /**
     * Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.
     */
    xmlns?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["html"]
    >;

  /**
   * The head element represents a collection of metadata for the Document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/head}*/
  head: {
    /**
     * The URIs of one or more metadata profiles, separated by white space.
     */
    profile?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["head"]
    >;

  /**
   * The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/title}*/
  title: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["title"]
    >;

  /**
   * The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/base}*/
  base: {
    /**
     * The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed.
     */
    href?: ValueSets["default"];
    /**
* A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:

*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.
*   `_blank`: Load the result into a new unnamed browsing context.
*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.

If this attribute is specified, this element must come before any other elements with attributes whose values are URLs.
*/
    target?: ValueSets["target"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["base"]
    >;

  /**
   * The link element allows authors to link their document to other resources.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/link}*/
  link: {
    /**
     * This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.
     */
    href?: ValueSets["default"];
    /**
* This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:

`anonymous`

A cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn't disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.

`use-credentials`

A cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.

If the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.
*/
    crossorigin?: ValueSets["xo"];
    /**
     * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
     */
    rel?: ValueSets["default"];
    /**
* This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on.

**Notes:**

*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.
*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.
*/
    media?: ValueSets["default"];
    /**
     * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present.
     */
    hreflang?: ValueSets["default"];
    /**
     * This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.
     */
    type?: ValueSets["default"];
    /**
* This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:

*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.
*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.

**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it.
*/
    sizes?: ValueSets["default"];
    /**
     * This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.") request header.
     */
    as?: ValueSets["default"];
    /**
     * Indicates the relative importance of the resource. Priority hints are delegated using the values:
     */
    importance?: ValueSets["default"];
    /**
     * Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you’re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).
     */
    integrity?: ValueSets["default"];
    /**
* A string indicating which referrer to use when fetching the resource:

*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior, if no policy is otherwise specified.
*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.
*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path.
*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.
*/
    referrerpolicy?: ValueSets["default"];
    /**
     * The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).
     */
    title?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["link"]
    >;

  /**
   * The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meta}*/
  meta: {
    /**
* This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.

This metadata name is associated with the value contained by the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:

*   `application-name` which defines the name of the application running in the web page.
    
    **Note:**
    
    *   Browsers may use this to identify the application. It is different from the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document's title that is shown in a browser's title bar or a page's tab.") element, which usually contain the application name, but may also contain information like the document name or a status.
    *   Simple web pages shouldn't define an application-name.
    
*   `author` which defines the name of the document's author.
*   `description` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.
*   `generator` which contains the identifier of the software that generated the page.
*   `keywords` which contains words relevant to the page's content separated by commas.
*   `referrer` which controls the [`Referer` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:
    
    Values for the `content` attribute of `<meta name="referrer">`
    
    `no-referrer`
    
    Do not send a HTTP `Referrer` header.
    
    `origin`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.
    
    `no-referrer-when-downgrade`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https→https), but does not send a referrer to less secure URLs (https→http). This is the default behaviour.
    
    `origin-when-cross-origin`
    
    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.
    
    `same-origin`
    
    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.
    
    `strict-origin`
    
    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don't send it to a less secure destination (HTTPS->HTTP).
    
    `strict-origin-when-cross-origin`
    
    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).
    
    `unsafe-URL`
    
    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.
    
    **Notes:**
    
    *   Some browsers support the deprecated values of `always`, `default`, and `never` for referrer.
    *   Dynamically inserting `<meta name="referrer">` (with [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.
    *   When several conflicting policies are defined, the no-referrer policy is applied.
    

This attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:

*   `creator` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.
*   `googlebot`, a synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).
*   `publisher` which defines the name of the document's publisher.
*   `robots` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:
    
    Values for the content of `<meta name="robots">`
    
    Value
    
    Description
    
    Used by
    
    `index`
    
    Allows the robot to index the page (default).
    
    All
    
    `noindex`
    
    Requests the robot to not index the page.
    
    All
    
    `follow`
    
    Allows the robot to follow the links on the page (default).
    
    All
    
    `nofollow`
    
    Requests the robot to not follow the links on the page.
    
    All
    
    `none`
    
    Equivalent to `noindex, nofollow`
    
    [Google](https://support.google.com/webmasters/answer/79812)
    
    `noodp`
    
    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.
    
    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    `noarchive`
    
    Requests the search engine not to cache the page content.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    `nosnippet`
    
    Prevents displaying any description of the page in search engine results.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    `noimageindex`
    
    Requests this page not to appear as the referring page of an indexed image.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)
    
    `nocache`
    
    Synonym of `noarchive`.
    
    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    **Notes:**
    
    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.
    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether crawlers are permitted or forbidden access to the web site.")_ file.
    *   If you want to remove a page, `noindex` will work, but only after the robot visits the page again. Ensure that the `robots.txt` file is not preventing revisits.
    *   Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`. In these cases the robot's behaviour is undefined and may vary between them.
    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header `X-Robots-Tag`; this allows non-HTML documents like images to use these rules.
    
*   `slurp`, is a synonym of `robots`, but only for Slurp - the crawler for Yahoo Search.
*   `viewport`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.
    
    Values for the content of `<meta name="viewport">`
    
    Value
    
    Possible subvalues
    
    Description
    
    `width`
    
    A positive integer number, or the text `device-width`
    
    Defines the pixel width of the viewport that you want the web site to be rendered at.
    
    `height`
    
    A positive integer, or the text `device-height`
    
    Defines the height of the viewport. Not used by any browser.
    
    `initial-scale`
    
    A positive number between `0.0` and `10.0`
    
    Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size.
    
    `maximum-scale`
    
    A positive number between `0.0` and `10.0`
    
    Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    `minimum-scale`
    
    A positive number between `0.0` and `10.0`
    
    Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    `user-scalable`
    
    `yes` or `no`
    
    If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this rule, and iOS10+ ignores it by default.
    
    Specification
    
    Status
    
    Comment
    
    [CSS Device Adaptation  
    The definition of '<meta name="viewport">' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)
    
    Working Draft
    
    Non-normatively describes the Viewport META element
    
    See also: [`@viewport`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It's primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")
    
    **Notes:**
    
    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.
    *   The default values may vary between devices and browsers.
    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").
*/
    name?: ValueSets["default"];
    /**
* Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:

*   `"content-language"`  
    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.
    
    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.
    
*   `"content-security-policy"`  
    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.
*   `"content-type"`  
    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string '`text/html`' followed by a character set with the following syntax: '`; charset=_IANAcharset_`', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)
    
    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.
    
    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can't change documents' types in XHTML or HTML5's XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.
    
*   `"refresh"`  
    This instruction specifies:
    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.
    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string '`;url=`', and a valid URL.
*   `"set-cookie"`  
    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).
    
    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.
*/
    ["http-equiv"]?: ValueSets["default"];
    /**
     * This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used.
     */
    content?: ValueSets["default"];
    /**
* This attribute declares the page's character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn't request a specific encoding, it suggests:

*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).
*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.

**Note:** ASCII-incompatible encodings are those that don't map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)

*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.
*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.

**Notes:**

*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.
*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.
*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page's character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.
*   It is strongly recommended to define the character encoding. If a page's encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).
*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.
*/
    charset?: ValueSets["default"];
    /**
* This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.

**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it.
*/
    scheme?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["meta"]
    >;

  /**
   * The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/style}*/
  style: {
    /**
     * This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing.
     */
    media?: ValueSets["default"];
    /**
     * A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource’s policy is otherwise trivial.
     */
    nonce?: ValueSets["default"];
    /**
     * This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified — there is very little reason to include this in modern web documents.
     */
    type?: ValueSets["default"];

    scoped?: ValueSets["v"];
    /**
     * This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets.
     */
    title?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["style"]
    >;

  /**
   * The body element represents the content of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/body}*/
  body: WindowEvents<
    HTMLElementTagNameMap["body"]
  > & {
    /**
     * Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._
     */
    alink?: ValueSets["default"];
    /**
     * URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._
     */
    background?: ValueSets["default"];
    /**
     * Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._
     */
    bgcolor?: ValueSets["default"];
    /**
     * The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._
     */
    bottommargin?: ValueSets["default"];
    /**
     * The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._
     */
    leftmargin?: ValueSets["default"];
    /**
     * Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._
     */
    link?: ValueSets["default"];
    /**
     * The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._
     */
    rightmargin?: ValueSets["default"];
    /**
     * Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property on the element instead._
     */
    text?: ValueSets["default"];
    /**
     * The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._
     */
    topmargin?: ValueSets["default"];
    /**
     * Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._
     */
    vlink?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["body"]
    >;

  /**
   * The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/article}*/
  article: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["article"]
    >;

  /**
   * The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/section}*/
  section: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["section"]
    >;

  /**
   * The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/nav}*/
  nav: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["nav"]
    >;

  /**
   * The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/aside}*/
  aside: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["aside"]
    >;

  /**
   * The h1 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h1: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h1"]
    >;

  /**
   * The h2 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h2: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h2"]
    >;

  /**
   * The h3 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h3: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h3"]
    >;

  /**
   * The h4 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h4: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h4"]
    >;

  /**
   * The h5 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h5: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h5"]
    >;

  /**
   * The h6 element represents a section heading.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}*/
  h6: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["h6"]
    >;

  /**
   * The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/header}*/
  header: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["header"]
    >;

  /**
   * The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/footer}*/
  footer: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["footer"]
    >;

  /**
   * The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/address}*/
  address: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["address"]
    >;

  /**
   * The p element represents a paragraph.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/p}*/
  p: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["p"]
    >;

  /**
   * The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/hr}*/
  hr: {
    /**
     * Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.
     */
    align?: ValueSets["default"];
    /**
     * Sets the color of the rule through color name or hexadecimal value.
     */
    color?: ValueSets["default"];
    /**
     * Sets the rule to have no shading.
     */
    noshade?: ValueSets["default"];
    /**
     * Sets the height, in pixels, of the rule.
     */
    size?: ValueSets["default"];
    /**
     * Sets the length of the rule on the page through a pixel or percentage value.
     */
    width?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["hr"]
    >;

  /**
   * The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/pre}*/
  pre: {
    /**
     * Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.
     */
    cols?: ValueSets["default"];
    /**
     * Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.
     */
    width?: ValueSets["default"];
    /**
     * Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.
     */
    wrap?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["pre"]
    >;

  /**
   * The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/blockquote}*/
  blockquote: {
    /**
     * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
     */
    cite?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["blockquote"]
    >;

  /**
   * The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ol}*/
  ol: {
    /**
     * This Boolean attribute specifies that the items of the list are specified in reversed order.
     */
    reversed?: ValueSets["v"];
    /**
* This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.

**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.
*/
    start?: ValueSets["default"];
    /**
* Indicates the numbering type:

*   `'a'` indicates lowercase letters,
*   `'A'` indicates uppercase letters,
*   `'i'` indicates lowercase Roman numerals,
*   `'I'` indicates uppercase Roman numerals,
*   and `'1'` indicates numbers (default).

The type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li "The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.") element.

**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.

Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property should be used instead.
*/
    type?: ValueSets["lt"];
    /**
* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.

**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.
*/
    compact?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["ol"]
    >;

  /**
   * The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ul}*/
  ul: {
    /**
* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.

**Usage note: **Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.
*/
    compact?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["ul"]
    >;

  /**
   * The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/li}*/
  li: {
    /**
* This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).

**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.

**Note:** Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed.
*/
    value?: ValueSets["default"];
    /**
* This character attribute indicates the numbering type:

*   `a`: lowercase letters
*   `A`: uppercase letters
*   `i`: lowercase Roman numerals
*   `I`: uppercase Roman numerals
*   `1`: numbers

This type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.

**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.
*/
    type?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["li"]
    >;

  /**
   * The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dl}*/
  dl: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["dl"]
    >;

  /**
   * The dt element represents the term, or name, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dt}*/
  dt: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["dt"]
    >;

  /**
   * The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dd}*/
  dd: {
    /**
     * If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`.
     */
    nowrap?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["dd"]
    >;

  /**
   * The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figure}*/
  figure: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["figure"]
    >;

  /**
   * The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/figcaption}*/
  figcaption: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["figcaption"]
    >;

  /**
   * The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/main}*/
  main: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["main"]
    >;

  /**
   * The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}*/
  div: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["div"]
    >;

  /**
   * If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/a}*/
  a: {
    /**
* Contains a URL or a URL fragment that the hyperlink points to.
A URL fragment is a name preceded by a hash mark (`#`), which specifies an internal target location (an [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of an HTML element) within the current document. URLs are not restricted to Web (HTTP)-based documents, but can use any protocol supported by the browser. For example, [`file:`](https://en.wikipedia.org/wiki/File_URI_scheme), `ftp:`, and `mailto:` work in most browsers.

**Note:** You can use `href="#top"` or the empty fragment `href="#"` to link to the top of the current page. [This behavior is specified by HTML5](https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid).
*/
    href?: ValueSets["default"];
    /**
* Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:

*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.
*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.
*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.
*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.

**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.

**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page's performance may suffer. To avoid this use `rel="noopener"`.
*/
    target?: ValueSets["target"];
    /**
* This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.

**Notes:**

*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.
*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.
*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute.
*/
    download?: ValueSets["default"];
    /**
     * Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.
     */
    ping?: ValueSets["default"];
    /**
     * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
     */
    rel?: ValueSets["default"];
    /**
     * This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").
     */
    hreflang?: ValueSets["default"];
    /**
     * Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).") for the linked URL. It is purely advisory, with no built-in functionality.
     */
    type?: ValueSets["default"];
    /**
* Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:

*   `'no-referrer'` means the `Referer:` header will not be sent.
*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.
*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.
*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.
*   `'strict-origin-when-cross-origin'`
*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.
*/
    referrerpolicy?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["a"]
    >;

  /**
   * The em element represents stress emphasis of its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/em}*/
  em: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["em"]
    >;

  /**
   * The strong element represents strong importance, seriousness, or urgency for its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/strong}*/
  strong: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["strong"]
    >;

  /**
   * The small element represents side comments such as small print.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/small}*/
  small: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["small"]
    >;

  /**
   * The s element represents contents that are no longer accurate or no longer relevant.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/s}*/
  s: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["s"]
    >;

  /**
   * The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/cite}*/
  cite: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["cite"]
    >;

  /**
   * The q element represents some phrasing content quoted from another source.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/q}*/
  q: {
    /**
     * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
     */
    cite?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["q"]
    >;

  /**
   * The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dfn}*/
  dfn: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["dfn"]
    >;

  /**
   * The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/abbr}*/
  abbr: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["abbr"]
    >;

  /**
   * The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ruby}*/
  ruby: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["ruby"]
    >;

  /**
   * The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rt}*/
  rt: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["rt"]
    >;

  /**
   * The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/rp}*/
  rp: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["rp"]
    >;

  /**
   * The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/time}*/
  time: {
    /**
     * This attribute indicates the time and/or date of the element and must be in one of the formats described below.
     */
    datetime?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["time"]
    >;

  /**
   * The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/code}*/
  code: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["code"]
    >;

  /**
   * The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/var}*/
  var: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["var"]
    >;

  /**
   * The samp element represents sample or quoted output from another program or computing system.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/samp}*/
  samp: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["samp"]
    >;

  /**
   * The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/kbd}*/
  kbd: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["kbd"]
    >;

  /**
   * The sub element represents a subscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sub}*/
  sub: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["sub"]
    >;

  /**
   * The sup element represents a superscript.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/sup}*/
  sup: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["sup"]
    >;

  /**
   * The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/i}*/
  i: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["i"]
    >;

  /**
   * The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/b}*/
  b: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["b"]
    >;

  /**
   * The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/u}*/
  u: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["u"]
    >;

  /**
   * The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/mark}*/
  mark: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["mark"]
    >;

  /**
   * The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdi}*/
  bdi: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["bdi"]
    >;

  /**
   * The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/bdo}*/
  bdo: {
    /**
* The direction in which text should be rendered in this element's contents. Possible values are:

*   `ltr`: Indicates that the text should go in a left-to-right direction.
*   `rtl`: Indicates that the text should go in a right-to-left direction.
*/
    dir?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["bdo"]
    >;

  /**
   * The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/span}*/
  span: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["span"]
    >;

  /**
   * The br element represents a line break.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/br}*/
  br: {
    /**
     * Indicates where to begin the next line after the break.
     */
    clear?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["br"]
    >;

  /**
   * The wbr element represents a line break opportunity.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/wbr}*/
  wbr: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["wbr"]
    >;

  /**
   * The ins element represents an addition to the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/ins}*/
  ins: {
    /**
     * This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.
     */
    cite?: ValueSets["default"];
    /**
     * This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").
     */
    datetime?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["ins"]
    >;

  /**
   * The del element represents a removal from the document.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/del}*/
  del: {
    /**
     * A URI for a resource that explains the change (for example, meeting minutes).
     */
    cite?: ValueSets["default"];
    /**
     * This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").
     */
    datetime?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["del"]
    >;

  /**
   * The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/picture}*/
  picture: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["picture"]
    >;

  /**
   * An img element represents an image.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/img}*/
  img: {
    /**
* This attribute defines an alternative text description of the image.

**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element's `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.

**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.
*/
    alt?: ValueSets["default"];
    /**
     * The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors.
     */
    src?: ValueSets["default"];
    /**
* A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:

1.  a URL to an image,
2.  optionally, whitespace followed by one of:
    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.
    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.

If no descriptor is specified, the source is assigned the default descriptor: `1x`.

It is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.

The user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.
*/
    srcset?: ValueSets["default"];
    /**
* This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:
`anonymous`

A cross-origin request (i.e., with `Origin:` HTTP header) is performed, but no credential is sent (i.e., no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header), the image will be tainted and its usage restricted.

`use-credentials`

A cross-origin request (i.e., with the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn't disclose the whole path.") HTTP header) performed along with credentials sent (i.e., a cookie, certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (through the `Access-Control-Allow-Credentials` HTTP header), the image will be tainted and its usage restricted.

If the attribute is not present, the resource is fetched without a CORS request (i.e., without sending the `Origin` HTTP header), preventing its non-tainted usage in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the `anonymous` value was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.
*/
    crossorigin?: ValueSets["xo"];
    /**
* The partial URL (starting with '#') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.

**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.
*/
    usemap?: ValueSets["default"];
    /**
* This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.

**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.
*/
    ismap?: ValueSets["v"];
    /**
     * The intrinsic width of the image in pixels.
     */
    width?: ValueSets["default"];
    /**
     * The intrinsic height of the image in pixels.
     */
    height?: ValueSets["default"];
    /**
* Provides an image decoding hint to the browser. The allowed values are:
`sync`

Decode the image synchronously for atomic presentation with other content.

`async`

Decode the image asynchronously to reduce delay in presenting other content.

`auto`

Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.
*/
    decoding?: ValueSets["decoding"];

    loading?: ValueSets["loading"];
    /**
* A string indicating which referrer to use when fetching the resource:

*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.
*   `origin:` The `Referer` header will include the page of origin's scheme, the host, and the port.
*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.
*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.
*/
    referrerpolicy?: ValueSets["referrerpolicy"];
    /**
* A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:

1.  a media condition. This must be omitted for the last item.
2.  a source size value.

Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image’s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect.
*/
    sizes?: ValueSets["default"];
    /**
     * Indicates the relative importance of the resource. Priority hints are delegated using the values:
     */
    importance?: ValueSets["default"];
    /**
     * This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)
     */
    intrinsicsize?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["img"]
    >;

  /**
   * The iframe element represents a nested browsing context.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/iframe}*/
  iframe: {
    /**
     * The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.
     */
    src?: ValueSets["default"];
    /**
     * Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.
     */
    srcdoc?: ValueSets["default"];
    /**
     * A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The Window interface's open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn't exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.
     */
    name?: ValueSets["default"];
    /**
* Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:

*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.
*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).
*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).
*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).
*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.
*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.
*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).
*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").
*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).
*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent's storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).
*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).
*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.

**Notes about sandboxing:**

*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all.
*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.
*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.
*/
    sandbox?: ValueSets["sb"];

    seamless?: ValueSets["v"];
    /**
* Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.
This attribute is considered a legacy attribute and redefined as `allow="fullscreen"`.
*/
    allowfullscreen?: ValueSets["v"];
    /**
     * The width of the frame in CSS pixels. Default is `300`.
     */
    width?: ValueSets["default"];
    /**
     * The height of the frame in CSS pixels. Default is `150`.
     */
    height?: ValueSets["default"];
    /**
     * Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`.
     */
    allow?: ValueSets["default"];
    /**
     * Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).
     */
    allowpaymentrequest?: ValueSets["default"];
    /**
     * A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.
     */
    csp?: ValueSets["default"];
    /**
* The download priority of the resource in the `<iframe>`'s `src` attribute. Allowed values:

`auto` (default)

No preference. The browser uses its own heuristics to decide the priority of the resource.

`high`

The resource should be downloaded before other lower-priority page resources.

`low`

The resource should be downloaded after other higher-priority page resources.
*/
    importance?: ValueSets["default"];
    /**
* Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame's resource:

*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content's origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).
*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").
*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.
*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.
*/
    referrerpolicy?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["iframe"]
    >;

  /**
   * The embed element provides an integration point for an external (typically non-HTML) application or interactive content.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/embed}*/
  embed: {
    /**
     * The URL of the resource being embedded.
     */
    src?: ValueSets["default"];
    /**
     * The MIME type to use to select the plug-in to instantiate.
     */
    type?: ValueSets["default"];
    /**
     * The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.
     */
    width?: ValueSets["default"];
    /**
     * The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.
     */
    height?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["embed"]
    >;

  /**
   * The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/object}*/
  object: {
    /**
     * The address of the resource as a valid URL. At least one of **data** and **type** must be defined.
     */
    data?: ValueSets["default"];
    /**
     * The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined.
     */
    type?: ValueSets["default"];
    /**
     * This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used.
     */
    typemustmatch?: ValueSets["v"];
    /**
     * The name of valid browsing context (HTML5), or the name of the control (HTML 4).
     */
    name?: ValueSets["default"];
    /**
     * A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map "The HTML <map> element is used with <area> elements to define an image map (a clickable link area).") element; that is a '#' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element.
     */
    usemap?: ValueSets["default"];
    /**
     * The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.
     */
    form?: ValueSets["default"];
    /**
     * The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
     */
    width?: ValueSets["default"];
    /**
     * The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
     */
    height?: ValueSets["default"];
    /**
     * A space-separated list of URIs for archives of resources for the object.
     */
    archive?: ValueSets["default"];
    /**
     * The width of a border around the control, in pixels.
     */
    border?: ValueSets["default"];
    /**
     * The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.
     */
    classid?: ValueSets["default"];
    /**
     * The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.
     */
    codebase?: ValueSets["default"];
    /**
     * The content type of the data specified by **classid**.
     */
    codetype?: ValueSets["default"];
    /**
     * The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused.
     */
    declare?: ValueSets["default"];
    /**
     * A message that the browser can show while loading the object's implementation and data.
     */
    standby?: ValueSets["default"];
    /**
     * The position of the element in the tabbing navigation order for the current document.
     */
    tabindex?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["object"]
    >;

  /**
   * A video element is used for playing videos or movies, and audio files with captions.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/video}*/
  video: {
    src?: ValueSets["default"];

    crossorigin?: ValueSets["xo"];

    poster?: ValueSets["default"];

    preload?: ValueSets["pl"];
    /**
* A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
**Note**: Sites that automatically play audio (or video with an audio track) can be an unpleasant experience for users, so it should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.

To disable video autoplay, `autoplay="false"` will not work; the video will autoplay if the attribute is there in the `<video>` tag at all. To remove autoplay the attribute needs to be removed altogether.

In some browsers (e.g. Chrome 70.0) autoplay is not working if no `muted` attribute is present.
*/
    autoplay?: ValueSets["v"];

    mediagroup?: ValueSets["default"];

    loop?: ValueSets["v"];

    muted?: ValueSets["v"];

    controls?: ValueSets["v"];

    width?: ValueSets["default"];

    height?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["video"]
    >;

  /**
   * An audio element represents a sound or audio stream.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/audio}*/
  audio: {
    /**
     * The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.
     */
    src?: ValueSets["default"];
    /**
* This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:

anonymous

Sends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.

use-credentials

Sends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.

When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.
*/
    crossorigin?: ValueSets["xo"];
    /**
* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:

*   `none`: Indicates that the audio should not be preloaded.
*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.
*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
*   _empty string_: A synonym of the `auto` value.

If not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.

**Usage notes:**

*   The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.
*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.
*/
    preload?: ValueSets["pl"];
    /**
* A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.
*/
    autoplay?: ValueSets["v"];

    mediagroup?: ValueSets["default"];
    /**
     * A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.
     */
    loop?: ValueSets["v"];
    /**
     * A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.
     */
    muted?: ValueSets["v"];
    /**
     * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.
     */
    controls?: ValueSets["v"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["audio"]
    >;

  /**
   * The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/source}*/
  source: {
    /**
     * Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.
     */
    src?: ValueSets["default"];
    /**
     * The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs.
     */
    type?: ValueSets["default"];
    /**
* Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  
The `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.
*/
    sizes?: ValueSets["default"];
    /**
* A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:

1.  one URL to an image,
2.  a width descriptor, that is a positive integer directly followed by `'w'`. The default value, if missing, is the infinity.
3.  a pixel density descriptor, that is a positive floating number directly followed by `'x'`. The default value, if missing, is `1x`.

Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  
The browser chooses the most adequate image to display at a given point of time.  
The `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.
*/
    srcset?: ValueSets["default"];
    /**
     * [Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource's intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.
     */
    media?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["source"]
    >;

  /**
   * The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/track}*/
  track: {
    /**
     * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.
     */
    default?: ValueSets["v"];
    /**
* How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.) The following keywords are allowed:

*   `subtitles`
    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.
    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.
*   `captions`
    *   Closed captions provide a transcription and possibly a translation of audio.
    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
    *   Suitable for users who are deaf or when the sound is muted.
*   `descriptions`
    *   Textual description of the video content.
    *   Suitable for users who are blind or where the video cannot be seen.
*   `chapters`
    *   Chapter titles are intended to be used when the user is navigating the media resource.
*   `metadata`
    *   Tracks used by scripts. Not visible to the user.
*/
    kind?: ValueSets["tk"];
    /**
     * A user-readable title of the text track which is used by the browser when listing available text tracks.
     */
    label?: ValueSets["default"];
    /**
     * Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.
     */
    src?: ValueSets["default"];
    /**
     * Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to `subtitles,` then `srclang` must be defined.
     */
    srclang?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["track"]
    >;

  /**
   * The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/map}*/
  map: {
    /**
     * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value.
     */
    name?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["map"]
    >;

  /**
   * The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/area}*/
  area: {
    alt?: ValueSets["default"];

    coords?: ValueSets["default"];

    shape?: ValueSets["sh"];

    href?: ValueSets["default"];

    target?: ValueSets["target"];

    download?: ValueSets["default"];

    ping?: ValueSets["default"];

    rel?: ValueSets["default"];

    hreflang?: ValueSets["default"];

    type?: ValueSets["default"];
    /**
     * Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5.
     */
    accesskey?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["area"]
    >;

  /**
   * The table element represents data with more than one dimension, in the form of a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/table}*/
  table: {
    border?: ValueSets["default"];
    /**
* This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:

*   left: the table is displayed on the left side of the document;
*   center: the table is displayed in the center of the document;
*   right: the table is displayed on the right side of the document.

**Usage Note**

*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.
*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["table"]
    >;

  /**
   * The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/caption}*/
  caption: {
    /**
* This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:

`left`

The caption is displayed to the left of the table.

`top`

The caption is displayed above the table.

`right`

The caption is displayed to the right of the table.

`bottom`

The caption is displayed below the table.

**Usage note:** Do not use this attribute, as it has been deprecated. The [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.") and [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["caption"]
    >;

  /**
   * The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/colgroup}*/
  colgroup: {
    span?: ValueSets["default"];
    /**
* This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

*   `left`, aligning the content to the left of the cell
*   `center`, centering the content in the cell
*   `right`, aligning the content to the right of the cell
*   `justify`, inserting spaces into the textual content so that the content is justified in the cell
*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).

If this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.

**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:
    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won't inherit it.
    *   If the table doesn't use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.
    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.
*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["colgroup"]
    >;

  /**
   * If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/col}*/
  col: {
    span?: ValueSets["default"];
    /**
* This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

*   `left`, aligning the content to the left of the cell
*   `center`, centering the content in the cell
*   `right`, aligning the content to the right of the cell
*   `justify`, inserting spaces into the textual content so that the content is justified in the cell
*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).

If this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.

**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:
    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won't inherit it.
    *   If the table doesn't use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.
    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.
*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["col"]
    >;

  /**
   * The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tbody}*/
  tbody: {
    /**
* This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

*   `left`, aligning the content to the left of the cell
*   `center`, centering the content in the cell
*   `right`, aligning the content to the right of the cell
*   `justify`, inserting spaces into the textual content so that the content is justified in the cell
*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.

If this attribute is not set, the `left` value is assumed.

**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.
*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["tbody"]
    >;

  /**
   * The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/thead}*/
  thead: {
    /**
* This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

*   `left`, aligning the content to the left of the cell
*   `center`, centering the content in the cell
*   `right`, aligning the content to the right of the cell
*   `justify`, inserting spaces into the textual content so that the content is justified in the cell
*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).

If this attribute is not set, the `left` value is assumed.

**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.
*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["thead"]
    >;

  /**
   * The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tfoot}*/
  tfoot: {
    /**
* This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

*   `left`, aligning the content to the left of the cell
*   `center`, centering the content in the cell
*   `right`, aligning the content to the right of the cell
*   `justify`, inserting spaces into the textual content so that the content is justified in the cell
*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).

If this attribute is not set, the `left` value is assumed.

**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.
*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["tfoot"]
    >;

  /**
   * The tr element represents a row of cells in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/tr}*/
  tr: {
    /**
* A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell's context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:

`left`

Align the content of each cell at its left edge.

`center`

Center the contents of each cell between their left and right edges.

`right`

Align the content of each cell at its right edge.

`justify`

Widen whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).

`char`

Align each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.

If no value is expressly set for `align`, the parent node's value is inherited.

Instead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row's cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).
*/
    align?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["tr"]
    >;

  /**
   * The td element represents a data cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/td}*/
  td: {
    colspan?: ValueSets["default"];

    rowspan?: ValueSets["default"];

    headers?: ValueSets["default"];
    /**
* This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.
*/
    abbr?: ValueSets["default"];
    /**
* This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are:

*   `left`: The content is aligned to the left of the cell.
*   `center`: The content is centered in the cell.
*   `right`: The content is aligned to the right of the cell.
*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.
*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).

The default value when this attribute is not specified is `left`.

**Note:** Do not use this attribute as it is obsolete in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.
*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.
*/
    align?: ValueSets["default"];
    /**
* This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.

**Note:** Do not use this attribute as it is obsolete in the latest standard.
*/
    axis?: ValueSets["default"];
    /**
* This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

 

`black` = "#000000"

 

`green` = "#008000"

 

`silver` = "#C0C0C0"

 

`lime` = "#00FF00"

 

`gray` = "#808080"

 

`olive` = "#808000"

 

`white` = "#FFFFFF"

 

`yellow` = "#FFFF00"

 

`maroon` = "#800000"

 

`navy` = "#000080"

 

`red` = "#FF0000"

 

`blue` = "#0000FF"

 

`purple` = "#800080"

 

`teal` = "#008080"

 

`fuchsia` = "#FF00FF"

 

`aqua` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.
*/
    bgcolor?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["td"]
    >;

  /**
   * The th element represents a header cell in a table.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/th}*/
  th: {
    colspan?: ValueSets["default"];

    rowspan?: ValueSets["default"];

    headers?: ValueSets["default"];

    scope?: ValueSets["s"];

    sorted?: ValueSets["default"];
    /**
     * This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.
     */
    abbr?: ValueSets["default"];
    /**
* This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are:

*   `left`: The content is aligned to the left of the cell.
*   `center`: The content is centered in the cell.
*   `right`: The content is aligned to the right of the cell.
*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.
*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.

The default value when this attribute is not specified is `left`.

**Note:** Do not use this attribute as it is obsolete in the latest standard.

*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.
*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.
*/
    align?: ValueSets["default"];
    /**
* This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.

**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead.
*/
    axis?: ValueSets["default"];
    /**
* This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

 

`black` = "#000000"

 

`green` = "#008000"

 

`silver` = "#C0C0C0"

 

`lime` = "#00FF00"

 

`gray` = "#808080"

 

`olive` = "#808000"

 

`white` = "#FFFFFF"

 

`yellow` = "#FFFF00"

 

`maroon` = "#800000"

 

`navy` = "#000080"

 

`red` = "#FF0000"

 

`blue` = "#0000FF"

 

`purple` = "#800080"

 

`teal` = "#008080"

 

`fuchsia` = "#FF00FF"

 

`aqua` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.
*/
    bgcolor?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["th"]
    >;

  /**
   * The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/form}*/
  form: {
    /**
* A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  
In previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.
*/
    ["accept-charset"]?: ValueSets["default"];
    /**
     * The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.
     */
    action?: ValueSets["default"];
    /**
* Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:

*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.
*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.

For most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).
**Note:** If you set `autocomplete` to `off` in a form because the document provides its own auto-completion, then you should also set `autocomplete` to `off` for each of the form's `input` elements that the document can auto-complete. For details, see the note regarding Google Chrome in the [Browser Compatibility chart](#compatChart).
*/
    autocomplete?: ValueSets["o"];
    /**
* When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:

*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".
*   `text/plain`: (HTML5)

This value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.
*/
    enctype?: ValueSets["et"];
    /**
* The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:

*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.
*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.
*   `dialog`: Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.

This value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.
*/
    method?: ValueSets["m"];
    /**
     * The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5.
     */
    name?: ValueSets["default"];
    /**
     * This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.
     */
    novalidate?: ValueSets["v"];
    /**
* A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:

*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.
*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.
*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").

HTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.
*/
    target?: ValueSets["target"];
    /**
* A comma-separated list of content types that the server accepts.

**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.
*/
    accept?: ValueSets["default"];
    /**
* This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:

*   `none`: Completely disables automatic capitalization
*   `sentences`: Automatically capitalize the first letter of sentences.
*   `words`: Automatically capitalize the first letter of words.
*   `characters`: Automatically capitalize all characters.
*   `on`: Deprecated since iOS 5.
*   `off`: Deprecated since iOS 5.
*/
    autocapitalize?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["form"]
    >;

  /**
   * The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/label}*/
  label: {
    /**
     * The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.
     */
    form?: ValueSets["default"];
    /**
* The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.

**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element.
*/
    for?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["label"]
    >;

  /**
   * The input element represents a typed data field, usually with a form control to allow the user to edit the data.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/input}*/
  input: {
    accept?: ValueSets["default"];

    alt?: ValueSets["default"];

    autocomplete?: ValueSets["inputautocomplete"];

    autofocus?: ValueSets["v"];

    checked?: ValueSets["v"];

    dirname?: ValueSets["default"];

    disabled?: ValueSets["v"];

    form?: ValueSets["default"];

    formaction?: ValueSets["default"];

    formenctype?: ValueSets["et"];

    formmethod?: ValueSets["fm"];

    formnovalidate?: ValueSets["v"];

    formtarget?: ValueSets["default"];

    height?: ValueSets["default"];

    inputmode?: ValueSets["im"];

    list?: ValueSets["default"];

    max?: ValueSets["default"];

    maxlength?: ValueSets["default"];

    min?: ValueSets["default"];

    minlength?: ValueSets["default"];

    multiple?: ValueSets["v"];

    name?: ValueSets["default"];

    pattern?: ValueSets["default"];

    placeholder?: ValueSets["default"];

    readonly?: ValueSets["v"];

    required?: ValueSets["v"];

    size?: ValueSets["default"];

    src?: ValueSets["default"];

    step?: ValueSets["default"];

    type?: ValueSets["t"];

    value?: ValueSets["default"];

    width?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["input"]
    >;

  /**
   * The button element represents a button labeled by its contents.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/button}*/
  button: {
    /**
     * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
     */
    autofocus?: ValueSets["v"];
    /**
* This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.

Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.
*/
    disabled?: ValueSets["v"];
    /**
     * The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.
     */
    form?: ValueSets["default"];
    /**
     * The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner.
     */
    formaction?: ValueSets["default"];
    /**
* If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:

*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.
*   `text/plain`

If this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button's form owner.
*/
    formenctype?: ValueSets["et"];
    /**
* If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:

*   `post`: The data from the form are included in the body of the form and sent to the server.
*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.

If specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner.
*/
    formmethod?: ValueSets["fm"];
    /**
     * If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner.
     */
    formnovalidate?: ValueSets["v"];
    /**
* If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:

*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
*   `_blank`: Load the response into a new unnamed browsing context.
*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
*/
    formtarget?: ValueSets["default"];
    /**
     * The name of the button, which is submitted with the form data.
     */
    name?: ValueSets["default"];
    /**
* The type of the button. Possible values are:

*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
*   `reset`: The button resets all the controls to their initial values.
*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
*/
    type?: ValueSets["bt"];
    /**
     * The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted.
     */
    value?: ValueSets["default"];
    /**
     * The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn't return after refreshing the page").
     */
    autocomplete?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["button"]
    >;

  /**
   * The select element represents a control for selecting amongst a set of options.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/select}*/
  select: {
    /**
     * A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent's](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent's: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.
     */
    autocomplete?: ValueSets["inputautocomplete"];
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.
     */
    autofocus?: ValueSets["v"];
    /**
     * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled.
     */
    disabled?: ValueSets["v"];
    /**
     * This attribute lets you specify the form element to which the select element is associated (that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.
     */
    form?: ValueSets["default"];
    /**
     * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.
     */
    multiple?: ValueSets["v"];
    /**
     * This attribute is used to specify the name of the control.
     */
    name?: ValueSets["default"];
    /**
     * A Boolean attribute indicating that an option with a non-empty string value must be selected.
     */
    required?: ValueSets["v"];
    /**
* If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.

**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox.
*/
    size?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["select"]
    >;

  /**
   * The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/datalist}*/
  datalist: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["datalist"]
    >;

  /**
   * The optgroup element represents a group of option elements with a common label.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/optgroup}*/
  optgroup: {
    /**
     * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.
     */
    disabled?: ValueSets["v"];
    /**
     * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.
     */
    label?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["optgroup"]
    >;

  /**
   * The option element represents an option in a select element or as part of a list of suggestions in a datalist element.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/option}*/
  option: {
    /**
     * If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.
     */
    disabled?: ValueSets["v"];
    /**
     * This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.
     */
    label?: ValueSets["default"];
    /**
     * If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.
     */
    selected?: ValueSets["v"];
    /**
     * The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.
     */
    value?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["option"]
    >;

  /**
   * The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/textarea}*/
  textarea: {
    /**
* This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:

*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.

If the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element's form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").
*/
    autocomplete?: ValueSets["inputautocomplete"];
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
     */
    autofocus?: ValueSets["v"];
    /**
     * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.
     */
    cols?: ValueSets["default"];

    dirname?: ValueSets["default"];
    /**
     * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.
     */
    disabled?: ValueSets["v"];
    /**
     * The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.
     */
    form?: ValueSets["default"];

    inputmode?: ValueSets["im"];
    /**
     * The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
     */
    maxlength?: ValueSets["default"];
    /**
     * The minimum number of characters (unicode code points) required that the user should enter.
     */
    minlength?: ValueSets["default"];
    /**
     * The name of the control.
     */
    name?: ValueSets["default"];
    /**
* A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.

**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.
*/
    placeholder?: ValueSets["default"];
    /**
     * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
     */
    readonly?: ValueSets["v"];
    /**
     * This attribute specifies that the user must fill in a value before submitting a form.
     */
    required?: ValueSets["v"];
    /**
     * The number of visible text lines for the control.
     */
    rows?: ValueSets["default"];
    /**
* Indicates how the control wraps text. Possible values are:

*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.
*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.
*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.

If this attribute is not specified, `soft` is its default value.
*/
    wrap?: ValueSets["w"];
    /**
* This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:

*   `none`: Completely disables automatic capitalization.
*   `sentences`: Automatically capitalize the first letter of sentences.
*   `words`: Automatically capitalize the first letter of words.
*   `characters`: Automatically capitalize all characters.
*   `on`: Deprecated since iOS 5.
*   `off`: Deprecated since iOS 5.
*/
    autocapitalize?: ValueSets["default"];
    /**
* Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:

*   `true`: Indicates that the element needs to have its spelling and grammar checked.
*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.
*   `false` : Indicates that the element should not be spell checked.
*/
    spellcheck?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["textarea"]
    >;

  /**
   * The output element represents the result of a calculation performed by the application, or the result of a user action.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/output}*/
  output: {
    /**
     * A space-separated list of other elements’ [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation.
     */
    for?: ValueSets["default"];
    /**
     * The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.
     */
    form?: ValueSets["default"];
    /**
     * The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.
     */
    name?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["output"]
    >;

  /**
   * The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/progress}*/
  progress: {
    /**
     * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.
     */
    value?: ValueSets["default"];
    /**
     * This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1.
     */
    max?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["progress"]
    >;

  /**
   * The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/meter}*/
  meter: {
    /**
* The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.

**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it.
*/
    value?: ValueSets["default"];
    /**
     * The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0.
     */
    min?: ValueSets["default"];
    /**
     * The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1.
     */
    max?: ValueSets["default"];
    /**
     * The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value.
     */
    low?: ValueSets["default"];
    /**
     * The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value.
     */
    high?: ValueSets["default"];
    /**
     * This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred.
     */
    optimum?: ValueSets["default"];
    /**
     * This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element.
     */
    form?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["meter"]
    >;

  /**
   * The fieldset element represents a set of form controls optionally grouped under a common name.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/fieldset}*/
  fieldset: {
    /**
     * If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element won't be disabled.
     */
    disabled?: ValueSets["v"];
    /**
     * This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.
     */
    form?: ValueSets["default"];
    /**
* The name associated with the group.

**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.
*/
    name?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["fieldset"]
    >;

  /**
   * The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/legend}*/
  legend: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["legend"]
    >;

  /**
   * The details element represents a disclosure widget from which the user can obtain additional information or controls.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/details}*/
  details: {
    /**
     * This Boolean attribute indicates whether or not the details — that is, the contents of the `<details>` element — are currently visible. The default, `false`, means the details are not visible.
     */
    open?: ValueSets["v"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["details"]
    >;

  /**
   * The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/summary}*/
  summary: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["summary"]
    >;

  /**
   * The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/dialog}*/
  dialog: {
    /**
     * Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user.
     */
    open?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["dialog"]
    >;

  /**
   * The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/script}*/
  script: {
    /**
* This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.

If a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags.
*/
    src?: ValueSets["default"];
    /**
* This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:

*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).
*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.
*   **Any other value:** The embedded content is treated as a data block which won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.

**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute — for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug 1428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).
*/
    type?: ValueSets["default"];

    charset?: ValueSets["default"];
    /**
* This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.

This attribute must not be used if the `src` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.

Browsers usually assume the worst case scenario and load scripts synchronously, (i.e. `async="false"`) during HTML parsing.

Dynamically inserted scripts (using [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set `async="false"`.

See [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).
*/
    async?: ValueSets["v"];
    /**
* This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").

Scripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.

This attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.

To achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.
*/
    defer?: ValueSets["v"];
    /**
     * Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.
     */
    crossorigin?: ValueSets["xo"];
    /**
     * A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
     */
    nonce?: ValueSets["default"];
    /**
     * This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).
     */
    integrity?: ValueSets["default"];
    /**
     * This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
     */
    nomodule?: ValueSets["default"];
    /**
* Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:

*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.
*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content's origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).
*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").
*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.
*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS→HTTPS), but don't send it to a less secure destination (e.g. HTTPS→HTTP).
*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).
*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to `no-referrer-when-downgrade`.
*/
    referrerpolicy?: ValueSets["default"];
    /**
     * Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.
     */
    text?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["script"]
    >;

  /**
   * The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/noscript}*/
  noscript: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["noscript"]
    >;

  /**
   * The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/template}*/
  template: GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["template"]
    >;

  /**
   * The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.
   *
   * [MDN Reference] {@link https://developer.mozilla.org/docs/Web/HTML/Element/canvas}*/
  canvas: {
    /**
     * The width of the coordinate space in CSS pixels. Defaults to 300.
     */
    width?: ValueSets["default"];
    /**
     * The height of the coordinate space in CSS pixels. Defaults to 150.
     */
    height?: ValueSets["default"];
    /**
     * Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext "The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.") instead.
     */
    ["moz-opaque"]?: ValueSets["default"];
  } & GlobalAttributes &
    GlobalEvents<
      HTMLElementTagNameMap["canvas"]
    >;
}
