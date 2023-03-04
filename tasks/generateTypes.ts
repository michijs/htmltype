import { writeFileSync } from "fs";
import "./generateSVGTypes";
import "./generateHTMLTypes";

writeFileSync(
  "./src/generated/index.ts",
  `export * from './HTMLElements';
export * from './SVGElements';
`,
);
