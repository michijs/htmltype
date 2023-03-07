import { GlobalEvents } from ".";
import { TypedDocumentAndElementEventHandlers } from "./TypedDocumentAndElementEventHandlers";
import { TypedElementEvent } from "./TypedElementEvent";

// Based on MathMLElementEventMap
export interface MathMLEvents
  extends GlobalEvents<MathMLElement>,
    TypedElementEvent<MathMLElement>,
    TypedDocumentAndElementEventHandlers<MathMLElement> {}
