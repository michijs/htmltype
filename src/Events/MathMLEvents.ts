import { GlobalEvents } from ".";
import { TypedDocumentAndElementEventHandlers } from "./TypedDocumentAndElementEventHandlers";
import { TypedElementEvent } from "./TypedElementEvent";

// Based on MathMLElementEventMap
export interface MathMLEvents<T extends Element>
  extends GlobalEvents<T>,
    TypedElementEvent<T>,
    TypedDocumentAndElementEventHandlers<T> {}
