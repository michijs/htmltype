import { HTMLDataManager } from "vscode-html-languageservice/lib/esm/languageFacts/dataManager";
import { HTMLHover } from "vscode-html-languageservice/lib/esm/services/htmlHover";

export const dataManager = new HTMLDataManager({});
export const htmlHover = new HTMLHover({}, dataManager);
