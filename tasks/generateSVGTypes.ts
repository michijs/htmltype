import {
  mkdirSync,
  writeFileSync,
} from "fs";
import svgData from "svg/html.html-data.json";
import {
  DEFAULT_VALUE_SET,
  getJSDoc,
  getPropertyName,
} from "./shared";
import {
  Attribute,
  ITag,
} from "./types";

const generatedSvgValueSets: string[][] =
  [];

const getPropertyValue =
  (
    property: Attribute,
  ) => {
    if (
      property.name ===
      "style"
    )
      return "CSSProperties";
    if (
      property.values
    ) {
      const values =
        property.values.map(
          (
            x,
          ) =>
            x.name,
        );
      const valueSetIndexFound =
        generatedSvgValueSets.findIndex(
          (
            x,
          ) =>
            values.every(
              (
                y,
              ) =>
                x?.includes(
                  y,
                ),
            ),
        );
      if (
        valueSetIndexFound ===
        -1
      ) {
        const newValueSetIndex =
          generatedSvgValueSets.push(
            values,
          ) -
          1;
        return `SVGValueSets[${newValueSetIndex}]`;
      }
      return `SVGValueSets[${valueSetIndexFound}]`;
    }
    return `SVGValueSets['${DEFAULT_VALUE_SET.key}']`;
  };

const getAttribute =
  (
    currentValue: Attribute,
  ) => `${getJSDoc(
    currentValue,
  )}
${getPropertyName(
  currentValue.name,
)}?: ${getPropertyValue(
    currentValue,
  )};`;

const getTagAttributes =
  (
    currentValue: ITag,
  ) => `{
  ${currentValue.attributes
    .filter(
      (
        value,
        index,
        self,
      ) =>
        // Removing duplicateds
        index ===
        self.findIndex(
          (
            t,
          ) =>
            t.name ===
            value.name,
        ),
    )
    .map(
      (
        x,
      ) =>
        getAttribute(
          x,
        ),
    )
    .join(
      "\n",
    )}
}`;

const NotSupportedSVGTags =
  [
    "animateColor",
    "color-profile",
    "discard",
    "font",
    "glyph",
    "hatch",
    "hatchpath",
  ];

const svgElements =
  svgData.tags
    ?.filter(
      (
        x,
      ) =>
        !NotSupportedSVGTags.includes(
          x.name,
        ),
    )
    .reduce(
      (
        previousValue,
        currentValue,
      ) => {
        return `${previousValue}

${getJSDoc(
  currentValue,
)}
${getPropertyName(
  currentValue.name,
)}: ${getTagAttributes(
          currentValue,
        )} & SVGEvents<SVGElementTagNameMap['${
          currentValue.name
        }']>;`;
      },
      "",
    );

const SVGValueSets =
  generatedSvgValueSets?.reduce(
    (
      previousValue,
      currentValue,
      i,
    ) => {
      return `${previousValue}
  [${i}]: ${currentValue
        .map(
          (
            x,
          ) =>
            `"${x}"`,
        )
        .join(
          " | ",
        )};`;
    },
    `${DEFAULT_VALUE_SET.key}: ${DEFAULT_VALUE_SET.value};`,
  );

// TODO: import GlobalEvents
// TODO: style

mkdirSync(
  "./src/generated/SVGElements",
  {
    recursive: true,
  },
);

writeFileSync(
  "./src/generated/SVGElements/SVGValueSets.ts",
  `// file generated from github:lishu/vscode-svg2
// SVG Data Version ${svgData.version}

export interface SVGValueSets {
  ${SVGValueSets}
}
`,
);
writeFileSync(
  "./src/generated/SVGElements/SVGElements.ts",
  `// file generated from github:lishu/vscode-svg2
// SVG Data Version ${svgData.version}
import { SVGValueSets } from './SVGValueSets'
import { SVGEvents } from '../../Events'
import { CSSProperties } from '../../types'

export interface SVGElements {
  ${svgElements}
}
`,
);

writeFileSync(
  "./src/generated/SVGElements/index.ts",
  `export type { SVGElements } from './SVGElements';
export type { SVGValueSets } from './SVGValueSets';
`,
);
