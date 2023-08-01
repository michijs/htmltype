import { GlobalEvents } from ".";
import { TypedDocumentAndElementEventHandlers } from "./TypedDocumentAndElementEventHandlers";
import { TypedElementEvent } from "./TypedElementEvent";

// Based on SVGElementEventMap
export interface SVGEvents<T extends EventTarget>
  extends GlobalEvents<T>,
    TypedElementEvent<T>,
    TypedDocumentAndElementEventHandlers<T> {}
