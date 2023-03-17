import { GlobalEvents } from ".";
import { TypedDocumentAndElementEventHandlers } from "./TypedDocumentAndElementEventHandlers";
import { TypedElementEvent } from "./TypedElementEvent";

// Based on SVGElementEventMap
export interface SVGEvents<T extends Element>
  extends GlobalEvents<T>,
    TypedElementEvent<T>,
    TypedDocumentAndElementEventHandlers<T> {}
