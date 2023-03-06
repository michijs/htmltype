import { TypedClipboardEvent } from "./TypedEvents/TypedClipboardEvent";

export interface TypedDocumentAndElementEventHandlers<T> {
  oncopy: ((ev: TypedClipboardEvent<T>) => any) | null;
  oncut: ((ev: TypedClipboardEvent<T>) => any) | null;
  onpaste: ((ev: TypedClipboardEvent<T>) => any) | null;
}
