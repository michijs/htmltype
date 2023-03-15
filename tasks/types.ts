import {
  IAttributeData,
  ITagData,
  HTMLDataV1,
  IValueData,
} from "vscode-html-languageservice";

export interface AttributeSet {
  [key: string]: IAttributeData[];
}

export interface JSDocInfo
  extends Pick<IValueData, "description" | "references"> {}

export interface InterfaceFactoryCommonAttrs {
  name: string;
  extends: {
    pickFromAllAttributes: string[];
    otherClasses: string[];
  };
}

export interface InterfaceFactory extends InterfaceFactoryCommonAttrs {
  attributes: Omit<IAttributeData, "values">[];
}
export interface ValueSetInterfaceFactory extends InterfaceFactoryCommonAttrs {
  attributes: Omit<IAttributeData, "valueSet">[];
}

export interface AddTypesFromProps {
  attributeSet?: AttributeSet;
  name: string;
  documentationSrc: HTMLDataV1;
  src: string;
  additionalImports?: string[];
  getElementInterface: (tag: string) => string;
  getAdditionalElementExtendsInterfaces?: (
    tag: string,
    elementInterface: string,
  ) => string[];
  getAttributes?: (tag: ITagData) => ITagData["attributes"];
}
