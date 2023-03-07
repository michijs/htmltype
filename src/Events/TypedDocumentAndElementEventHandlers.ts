import { TypedClipboardEvent } from "./TypedEvents/TypedClipboardEvent";

export interface TypedDocumentAndElementEventHandlers<T> {
  oncopy?: (ev: TypedClipboardEvent<T>) => any;
  oncut?: (ev: TypedClipboardEvent<T>) => any;
  onpaste?: (ev: TypedClipboardEvent<T>) => any;
}
