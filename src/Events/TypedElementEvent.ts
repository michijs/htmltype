import { TypedEvent } from "./TypedEvents/TypedEvent";

export interface TypedElementEvent<T> {
  onfullscreenchange?: TypedEvent<T>;
  onfullscreenerror?: TypedEvent<T>;
}
