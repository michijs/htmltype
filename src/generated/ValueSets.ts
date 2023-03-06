export interface ValueSets {
  default: string | number;
  b: "true" | "false";
  o: "on" | "off";
  y: "yes" | "no";
  w: "soft" | "hard";
  d: "ltr" | "rtl" | "auto";
  m: "get" | "post" | "dialog";
  fm: "get" | "post";
  s: "row" | "col" | "rowgroup" | "colgroup";
  t:
    | "hidden"
    | "text"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "password"
    | "datetime"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "number"
    | "range"
    | "color"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "image"
    | "reset"
    | "button";
  im:
    | "verbatim"
    | "latin"
    | "latin-name"
    | "latin-prose"
    | "full-width-latin"
    | "kana"
    | "kana-name"
    | "katakana"
    | "numeric"
    | "tel"
    | "email"
    | "url";
  bt: "button" | "submit" | "reset" | "menu";
  lt: "1" | "a" | "A" | "i" | "I";
  mt: "context" | "toolbar";
  mit: "command" | "checkbox" | "radio";
  et:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  tk: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  pl: "none" | "metadata" | "auto";
  sh: "circle" | "default" | "poly" | "rect";
  xo: "anonymous" | "use-credentials";
  target: "_self" | "_blank" | "_parent" | "_top";
  sb:
    | "allow-forms"
    | "allow-modals"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-top-navigation";
  tristate: "true" | "false" | "mixed";
  inputautocomplete:
    | "additional-name"
    | "address-level1"
    | "address-level2"
    | "address-level3"
    | "address-level4"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "bday"
    | "bday-year"
    | "bday-day"
    | "bday-month"
    | "billing"
    | "cc-additional-name"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-family-name"
    | "cc-given-name"
    | "cc-name"
    | "cc-number"
    | "cc-type"
    | "country"
    | "country-name"
    | "current-password"
    | "email"
    | "family-name"
    | "fax"
    | "given-name"
    | "home"
    | "honorific-prefix"
    | "honorific-suffix"
    | "impp"
    | "language"
    | "mobile"
    | "name"
    | "new-password"
    | "nickname"
    | "off"
    | "on"
    | "organization"
    | "organization-title"
    | "pager"
    | "photo"
    | "postal-code"
    | "sex"
    | "shipping"
    | "street-address"
    | "tel-area-code"
    | "tel"
    | "tel-country-code"
    | "tel-extension"
    | "tel-local"
    | "tel-local-prefix"
    | "tel-local-suffix"
    | "tel-national"
    | "transaction-amount"
    | "transaction-currency"
    | "url"
    | "username"
    | "work";
  autocomplete: "inline" | "list" | "both" | "none";
  current: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  dropeffect: "copy" | "move" | "link" | "execute" | "popup" | "none";
  invalid: "grammar" | "false" | "spelling" | "true";
  live: "off" | "polite" | "assertive";
  orientation: "vertical" | "horizontal";
  relevant: "additions" | "removals" | "text" | "all" | "additions text";
  sort: "ascending" | "descending" | "none" | "other";
  roles:
    | "alert"
    | "alertdialog"
    | "button"
    | "checkbox"
    | "dialog"
    | "gridcell"
    | "link"
    | "log"
    | "marquee"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "progressbar"
    | "radio"
    | "scrollbar"
    | "searchbox"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "tabpanel"
    | "textbox"
    | "timer"
    | "tooltip"
    | "treeitem"
    | "combobox"
    | "grid"
    | "listbox"
    | "menu"
    | "menubar"
    | "radiogroup"
    | "tablist"
    | "tree"
    | "treegrid"
    | "application"
    | "article"
    | "cell"
    | "columnheader"
    | "definition"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "group"
    | "heading"
    | "img"
    | "list"
    | "listitem"
    | "math"
    | "none"
    | "note"
    | "presentation"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "separator"
    | "table"
    | "term"
    | "text"
    | "toolbar"
    | "banner"
    | "complementary"
    | "contentinfo"
    | "form"
    | "main"
    | "navigation"
    | "region"
    | "search"
    | "doc-abstract"
    | "doc-acknowledgments"
    | "doc-afterword"
    | "doc-appendix"
    | "doc-backlink"
    | "doc-biblioentry"
    | "doc-bibliography"
    | "doc-biblioref"
    | "doc-chapter"
    | "doc-colophon"
    | "doc-conclusion"
    | "doc-cover"
    | "doc-credit"
    | "doc-credits"
    | "doc-dedication"
    | "doc-endnote"
    | "doc-endnotes"
    | "doc-epigraph"
    | "doc-epilogue"
    | "doc-errata"
    | "doc-example"
    | "doc-footnote"
    | "doc-foreword"
    | "doc-glossary"
    | "doc-glossref"
    | "doc-index"
    | "doc-introduction"
    | "doc-noteref"
    | "doc-notice"
    | "doc-pagebreak"
    | "doc-pagelist"
    | "doc-part"
    | "doc-preface"
    | "doc-prologue"
    | "doc-pullquote"
    | "doc-qna"
    | "doc-subtitle"
    | "doc-tip"
    | "doc-toc";
  metanames:
    | "application-name"
    | "author"
    | "description"
    | "format-detection"
    | "generator"
    | "keywords"
    | "publisher"
    | "referrer"
    | "robots"
    | "theme-color"
    | "viewport";
  haspopup: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  decoding: "sync" | "async" | "auto";
  loading: "eager" | "lazy";
  referrerpolicy:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  v: boolean;
  39: "CSS" | "XML" | "auto";
  40: "indefinite";
  41: "default" | "preserve";
  42: "always" | "whenNotActive" | "never";
  43: "remove" | "freeze";
  44: "discrete" | "linear" | "paced" | "spline";
  45: "replace" | "sum";
  46: "none" | "sum";
  47:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit";
  48: "auto" | "baseline" | "super" | "sub" | "inherit";
  49: "none" | "inherit";
  50: "nonzero" | "evenodd" | "inherit";
  51: "auto" | "sRGB" | "linearRGB" | "inherit";
  52: "auto" | "optimizeSpeed" | "optimizeQuality" | "inherit";
  53:
    | "auto"
    | "crosshair"
    | "default"
    | "pointer"
    | "move"
    | "e-resize"
    | "ne-resize"
    | "nw-resize"
    | "n-resize"
    | "se-resize"
    | "sw-resize"
    | "s-resize"
    | "w-resize| text"
    | "wait"
    | "help"
    | "inherit";
  54: "ltr" | "rtl" | "inherit";
  55:
    | "inline"
    | "block"
    | "list-item"
    | "run-in"
    | "compact"
    | "marker"
    | "table"
    | "inline-table"
    | "table-row-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row"
    | "table-column-group"
    | "table-column"
    | "table-cell"
    | "table-caption"
    | "none"
    | "inherit";
  56:
    | "	auto"
    | "use-script"
    | "no-change"
    | "reset-size"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "central"
    | "middle"
    | "text-after-edge"
    | "text-before-edge"
    | "inherit";
  57: "currentColor" | "inherit";
  58:
    | "normal"
    | "wider"
    | "narrower"
    | "ultra-condensed"
    | "extra-condensed"
    | "condensed"
    | "semi-condensed"
    | "semi-expanded"
    | "expanded"
    | "extra-expanded"
    | "ultra-expanded"
    | "inherit";
  59: "normal" | "italic" | "oblique" | "inherit";
  60: "normal" | "small-caps" | "inherit";
  61:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "inherit";
  62: "visible" | "hidden" | "scroll" | "auto" | "inherit";
  63:
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all"
    | "none"
    | "inherit";
  64:
    | "auto"
    | "optimizeSpeed"
    | "crispEdges"
    | "geometricPrecision"
    | "inherit";
  65: "butt" | "round" | "square" | "inherit";
  66: "miter" | "round" | "bevel" | "inherit";
  67: "start" | "middle" | "end" | "inherit";
  68: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit";
  69:
    | "auto"
    | "optimizeSpeed"
    | "optimizeLegibility"
    | "geometricPrecision"
    | "inherit";
  70:
    | "none"
    | "non-scaling-stroke"
    | "non-scaling-size"
    | "non-rotation"
    | "fixed-position";
  71: "visible" | "hidden" | "collapse" | "inherit";
  72: "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit";
  73: "userSpaceOnUse" | "objectBoundingBox";
  74:
    | "SourceGraphic"
    | "SourceAlpha"
    | "BackgroundImage"
    | "BackgroundAlpha"
    | "FillPaint"
    | "StrokePaint";
  75: "normal" | "multiply" | "screen" | "darken" | "lighten";
  76: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
  77: "duplicate" | "wrap" | "none";
  78: "R" | "G" | "B" | "A";
  79: "noStitch" | "stitch";
  80: "userSpaceOnUse" | "strokeWidth";
  81: "http://www.w3.org/1999/xlink";
}
