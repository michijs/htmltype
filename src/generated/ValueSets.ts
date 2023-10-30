import { CSSProperties } from "../types";
export interface ValueSets {
  41?: "ltr" | "rtl";
  42?: "block" | "inline";
  43?: "http://www.w3.org/1998/Math/MathML";
  45?: "none" | "sum";
  46?: "replace" | "sum";
  47?: "CSS" | "XML" | "auto";
  48?: "indefinite";
  49?: "always" | "whenNotActive" | "never";
  50?: "discrete" | "linear" | "paced" | "spline";
  51?:
    | "none meet"
    | "none slice"
    | "xMinYMin meet"
    | "xMinYMin slice"
    | "xMidYMin meet"
    | "xMidYMin slice"
    | "xMaxYMin meet"
    | "xMaxYMin slice"
    | "xMinYMid meet"
    | "xMinYMid slice"
    | "xMidYMid meet"
    | "xMidYMid slice"
    | "xMaxYMid meet"
    | "xMaxYMid slice"
    | "xMinYMax meet"
    | "xMinYMax slice"
    | "xMidYMax meet"
    | "xMidYMax slice"
    | "xMaxYMax meet"
    | "xMaxYMax slice";
  52?:
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
  53?: "nonzero" | "evenodd" | "inherit";
  54?: "auto" | "sRGB" | "linearRGB" | "inherit";
  55?: "auto" | "sRGB" | "inherit";
  56?: "auto" | "optimizeSpeed" | "optimizeQuality" | "inherit";
  57?:
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
  58?: "ltr" | "rtl" | "inherit";
  59?:
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
  60?:
    | "auto"
    | "text-bottom"
    | "alphabetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "hanging"
    | "text-top";
  61?:
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
  62?:
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
  63?: "auto" | "optimizeSpeed" | "optimizeQuality";
  64?: "visible" | "hidden" | "scroll" | "auto";
  65?:
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
  66?: "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision";
  67?: "butt" | "round" | "square";
  68?: "miter" | "round" | "bevel" | "miter-clip" | "round";
  69?: "start" | "middle" | "end";
  70?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit";
  71?:
    | "auto"
    | "optimizeSpeed"
    | "optimizeLegibility"
    | "geometricPrecision"
    | "inherit";
  72?:
    | "none"
    | "non-scaling-stroke"
    | "non-scaling-size"
    | "non-rotation"
    | "fixed-position";
  73?: "visible" | "hidden" | "collapse" | "inherit";
  74?: "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit";
  75?: "identity" | "table" | "discrete" | "linear" | "gamma";
  76?: "userSpaceOnUse" | "objectBoundingBox";
  77?:
    | "SourceGraphic"
    | "SourceAlpha"
    | "BackgroundImage"
    | "BackgroundAlpha"
    | "FillPaint"
    | "StrokePaint";
  78?: "normal" | "multiply" | "screen" | "darken" | "lighten";
  79?: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
  80?: "duplicate" | "wrap" | "none";
  81?: "R" | "G" | "B" | "A";
  82?:
    | "none"
    | "xMinYMin meet"
    | "xMinYMin slice"
    | "xMinYMid meet"
    | "xMinYMid slice"
    | "xMinYMax meet"
    | "xMinYMax slice"
    | "xMidYMin meet"
    | "xMidYMin slice"
    | "xMidYMid meet"
    | "xMidYMid slice"
    | "xMidYMax meet"
    | "xMidYMax slice"
    | "xMaxYMin meet"
    | "xMaxYMin slice"
    | "xMaxYMid meet"
    | "xMaxYMid slice"
    | "xMaxYMax meet"
    | "xMaxYMax slice";
  83?: "noStitch" | "stitch";
  84?: "fractalNoise" | "turbulence";
  85?: "pad" | "reflect" | "repeat";
  86?: "userSpaceOnUse" | "strokeWidth";
  87?: "http://www.w3.org/2000/svg";
  88?: "spacing" | "spacingAndGlyphs";
  89?: "alignt" | "stretch";
  90?: "auto" | "exact";
  autocomplete?: "inline" | "list" | "both" | "none";
  b?: "true" | "false";
  bt?: "button" | "submit" | "reset" | "menu";
  current?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  d?: "ltr" | "rtl" | "auto";
  decoding?: "sync" | "async" | "auto";
  default?: string | number | boolean;
  dropeffect?: "copy" | "move" | "link" | "execute" | "popup" | "none";
  et?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  fm?: "get" | "post";
  haspopup?: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  im?:
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
  inputautocomplete?:
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
  invalid?: "grammar" | "false" | "spelling" | "true";
  live?: "off" | "polite" | "assertive";
  loading?: "eager" | "lazy";
  lt?: "1" | "a" | "A" | "i" | "I";
  m?: "get" | "post" | "dialog";
  metanames?:
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
  mit?: "command" | "checkbox" | "radio";
  mt?: "context" | "toolbar";
  o?: "on" | "off";
  orientation?: "vertical" | "horizontal" | "undefined";
  pl?: "none" | "metadata" | "auto";
  referrerpoliciy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  relevant?: "additions" | "removals" | "text" | "all" | "additions text";
  roles?:
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
  s?: "row" | "col" | "rowgroup" | "colgroup";
  sb?:
    | "allow-forms"
    | "allow-modals"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-top-navigation";
  sh?: "circle" | "default" | "poly" | "rect";
  sort?: "ascending" | "descending" | "none" | "other";
  style?: CSSProperties;
  t?:
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
  target?: "_self" | "_blank" | "_parent" | "_top";
  tk?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  tristate?: "true" | "false" | "mixed" | "undefined";
  u?: "true" | "false" | "undefined";
  v?: boolean;
  w?: "soft" | "hard";
  xo?: "anonymous" | "use-credentials";
  y?: "yes" | "no";
}
