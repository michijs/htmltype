import fs from "fs";
import htmlDataImport from "@vscode/web-custom-data/data/browsers.html-data.json";
import { getJSDoc } from "./shared";
import type { IAttributeData } from "vscode-html-languageservice";

export function updateEventsJsDoc() {
  const FILE_PATH = "./src/Events/AllEvents.ts";
  let content = fs.readFileSync(FILE_PATH, "utf-8");
  // Cleaning comments
  content = content.replaceAll("\n", "");
  content = content.replace(/\/\*\*[\s\S]*?\*\//gm, "");

  // @ts-expect-error
  const allAttributes: IAttributeData[] =
    htmlDataImport.globalAttributes.concat(
      // @ts-expect-error
      ...htmlDataImport.tags.map((x) => x.attributes as IAttributeData[]),
    );

  // Used to not repeat comments - added some deprecated events
  const processedAttributes = new Set<string>([
    "onformchange",
    "onforminput",
    "onmousewheel",
    // Is a document event. Idk why is in global attributes
    "onreadystatechange",
    "onpointerlockchange",
    "onpointerlockerror",
  ]);

  // TODO: onshow, onredo, onundo event doesnt have types

  for (const attr of allAttributes) {
    const eventName = attr.name;

    if (
      !eventName.startsWith("on") ||
      attr.status?.baseline === false ||
      processedAttributes.has(eventName)
    )
      continue;
    const jsDoc = getJSDoc(attr);
    if (!jsDoc) continue;
    if (!content.includes(eventName)) console.log(`Missing event ${eventName}`);

    content = content.replace(`${eventName}?`, `${jsDoc}${eventName}?`);
    processedAttributes.add(eventName);
  }
  fs.writeFileSync(FILE_PATH, content, "utf-8");
}
