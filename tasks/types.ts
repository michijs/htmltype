export interface MarkupContent {
  kind: string;
  value: string;
}

export interface IReference {
  name: string;
  url: string;
}

export interface JSDocInfo {
  name: string;
  description?:
    | string
    | MarkupContent;
  references?: IReference[];
}

export interface Attribute
  extends JSDocInfo {
  values?: {
    name: string;
  }[];
  valueSet?: string;
}

export interface ITag
  extends JSDocInfo {
  attributes: Attribute[];
}
