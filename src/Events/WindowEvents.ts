import { TypedBeforeUnloadEvent } from "./TypedEvents/TypedBeforeUnloadEvent";
import { TypedEvent } from "./TypedEvents/TypedEvent";
import { TypedMessageEvent } from "./TypedEvents/TypedMessageEvent";
import { TypedPageTransitionEvent } from "./TypedEvents/TypedPageTransitionEvent";
import { TypedPopStateEvent } from "./TypedEvents/TypedPopStateEvent";
import { TypedPromiseRejectionEvent } from "./TypedEvents/TypedPromiseRejectionEvent";
import { TypedStorageEvent } from "./TypedEvents/TypedStorageEvent";

export interface WindowEvents<T> {
  onafterprint?(ev: TypedEvent<T>): unknown;
  onbeforeprint?(ev: TypedEvent<T>): unknown;
  onbeforeunload?(ev: TypedBeforeUnloadEvent<T>): unknown;
  ongamepadconnected?(ev: TypedEvent<T>): unknown;
  ongamepaddisconnected?(ev: TypedEvent<T>): unknown;
  onhashchange?(ev: TypedEvent<T>): unknown;
  onlanguagechange?(ev: TypedEvent<T>): unknown;
  onmessage?(ev: TypedMessageEvent<T>): unknown;
  onmessageerror?(ev: TypedMessageEvent<T>): unknown;
  onoffline?(ev: TypedEvent<T>): unknown;
  ononline?(ev: TypedEvent<T>): unknown;
  onpagehide?(ev: TypedPageTransitionEvent<T>): unknown;
  onpageshow?(ev: TypedPageTransitionEvent<T>): unknown;
  onpopstate?(ev: TypedPopStateEvent<T>): unknown;
  onrejectionhandled?(ev: TypedPromiseRejectionEvent<T>): unknown;
  onstorage?(ev: TypedStorageEvent<T>): unknown;
  onunhandledrejection?(ev: TypedPromiseRejectionEvent<T>): unknown;
  onunload?(ev: TypedEvent<T>): unknown;
}
