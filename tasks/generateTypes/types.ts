import type {
  IAttributeData,
  ITagData,
  HTMLDataV1,
  IValueData,
} from "vscode-html-languageservice";

export interface AttributeSet {
  [key: string]: IAttributeData[];
}

export interface GenerateAttributesAndValueSetsProps {
  valueSetsTransformer?(valueSets: ValueSetInterfaceFactory): void;
  valueSetsAdditionalImports?: string[];
}
export interface TypesFactoryProps {
  generatedPath?: string;
}
export interface GenerateTypesProps {
  generateAttributesAndValueSetsProps?: GenerateAttributesAndValueSetsProps;
  typesFactoryProps?: TypesFactoryProps;
  elements?: {
    additionalImports?: string[];
    additionalExtends?: GetAdditionalElementExtendsInterfaces;
  };
}

export type JSDocInfo = Pick<IValueData, "description" | "references" | "browsers" | "status">;

export interface InterfaceFactoryCommonAttrs {
  name: string;
  export?: boolean;
  requiredAttributes?: boolean;
  generics?: string;
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

export type GetAdditionalElementExtendsInterfaces = (
  tag: string,
  elementInterface: string,
) => string[];

export interface AddTypesFromProps {
  attributeSet?: AttributeSet;
  name: string;
  documentationSrc: HTMLDataV1;
  src: string;
  additionalImports?: string[];
  getElementInterface: (tag: string) => string;
  getAdditionalElementExtendsInterfaces?: GetAdditionalElementExtendsInterfaces;
  getAttributes?: (tag: ITagData) => ITagData["attributes"];
}
