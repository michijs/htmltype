import { mkdirSync, writeFileSync } from "fs";
import htmlData from "@vscode/web-custom-data/data/browsers.html-data.json";
import { Attribute, ITag } from "./types";
import { DEFAULT_VALUE_SET, getJSDoc, getPropertyName } from "./shared";

const getPropertyValue = (property: Attribute) =>
  property.name === "style"
    ? "CSSProperties"
    : `ValueSets['${property.valueSet ?? DEFAULT_VALUE_SET.key}']`;

const getAttribute = (currentValue: Attribute) => `${getJSDoc(currentValue)}
${getPropertyName(currentValue.name)}?: ${getPropertyValue(currentValue)};`;

const getTagAttributes = (currentValue: ITag) =>
  currentValue.attributes?.length > 0
    ? `{
  ${currentValue.attributes
    .filter(
      (value, index, self) =>
        // Removing duplicateds
        index === self.findIndex((t) => t.name === value.name) &&
        !value.name.startsWith("on"),
    )
    .map((x) => getAttribute(x))
    .join("\n")}
} & GlobalAttributes`
    : "GlobalAttributes";

const valueSets = htmlData.valueSets?.reduce(
  (previousValue, currentValue) => {
    return `${previousValue}
  ${getPropertyName(currentValue.name)}: ${currentValue.values
      .filter((x) => x.name !== "undefined")
      .map((x) => `"${x.name}"`)
      .join(" | ")};`;
  },
  `${DEFAULT_VALUE_SET.key}: ${DEFAULT_VALUE_SET.value};
  v: true | false;`,
);

const globalAttributes = htmlData.globalAttributes
  ?.filter((x) => !x.name.startsWith("on"))
  .reduce((previousValue, currentValue) => {
    return `${previousValue}

${getAttribute(currentValue)}`;
  }, "");

const NotSupportedHTMLTags = ["rb", "param"];

const htmlElements = htmlData.tags
  ?.filter((x) => !NotSupportedHTMLTags.includes(x.name))
  .reduce((previousValue, currentValue) => {
    return `${previousValue}

${getJSDoc(currentValue)}
${getPropertyName(
  currentValue.name,
)}: ${
      currentValue.name === "body"
        ? `WindowEvents<HTMLElementTagNameMap['${currentValue.name}']> &`
        : ""
    }${getTagAttributes(
      currentValue,
    )} & GlobalEvents<HTMLElementTagNameMap['${currentValue.name}']>;`;
  }, "");

// TODO: import GlobalEvents
// TODO: style

mkdirSync("./src/generated/HTMLElements", {
  recursive: true,
});

writeFileSync(
  "./src/generated/HTMLElements/ValueSets.ts",
  `// file generated from @vscode/web-custom-data NPM package
// HTML Data Version ${htmlData.version}

export interface ValueSets {
  ${valueSets}
}
`,
);

writeFileSync(
  "./src/generated/HTMLElements/GlobalAttributes.ts",
  `// file generated from @vscode/web-custom-data NPM package
// HTML Data Version ${htmlData.version}
import { ValueSets } from './ValueSets'
import { CSSProperties } from '../../types'

export type GlobalAttributes = {
  ${globalAttributes}
} & {
/**
 * The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts. 
*/
   [k in \`data-\${string}\`]: string;
}
`,
);
writeFileSync(
  "./src/generated/HTMLElements/HTMLElements.ts",
  `// file generated from @vscode/web-custom-data NPM package
// HTML Data Version ${htmlData.version}
import { ValueSets } from './ValueSets'
import { GlobalAttributes } from './GlobalAttributes'
import { GlobalEvents, WindowEvents } from '../../Events'

export interface HTMLElements {
  ${htmlElements}
}
`,
);

writeFileSync(
  "./src/generated/HTMLElements/index.ts",
  `export type { HTMLElements } from './HTMLElements';
export type { ValueSets } from './ValueSets';
export type { GlobalAttributes } from './GlobalAttributes';
`,
);
