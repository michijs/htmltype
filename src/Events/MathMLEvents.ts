import { GlobalEvents } from ".";
import { TypedDocumentAndElementEventHandlers } from "./TypedDocumentAndElementEventHandlers";
import { TypedElementEvent } from "./TypedElementEvent";

// Based on MathMLElementEventMap
export interface MathMLEvents<T extends Element = MathMLElement>
  extends GlobalEvents<T>,
    TypedElementEvent<T>,
    TypedDocumentAndElementEventHandlers<T> {}
