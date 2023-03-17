import { TypedBeforeUnloadEvent } from "./TypedEvents/TypedBeforeUnloadEvent";
import { TypedEvent } from "./TypedEvents/TypedEvent";
import { TypedMessageEvent } from "./TypedEvents/TypedMessageEvent";
import { TypedPageTransitionEvent } from "./TypedEvents/TypedPageTransitionEvent";
import { TypedPopStateEvent } from "./TypedEvents/TypedPopStateEvent";
import { TypedPromiseRejectionEvent } from "./TypedEvents/TypedPromiseRejectionEvent";
import { TypedStorageEvent } from "./TypedEvents/TypedStorageEvent";

export interface WindowEvents<T> {
  onafterprint?: (ev: TypedEvent<T>) => any;
  onbeforeprint?: (ev: TypedEvent<T>) => any;
  onbeforeunload?: (ev: TypedBeforeUnloadEvent<T>) => any;
  ongamepadconnected?: (ev: TypedEvent<T>) => any;
  ongamepaddisconnected?: (ev: TypedEvent<T>) => any;
  onhashchange?: (ev: TypedEvent<T>) => any;
  onlanguagechange?: (ev: TypedEvent<T>) => any;
  onmessage?: (ev: TypedMessageEvent<T>) => any;
  onmessageerror?: (ev: TypedMessageEvent<T>) => any;
  onoffline?: (ev: TypedEvent<T>) => any;
  ononline?: (ev: TypedEvent<T>) => any;
  onpagehide?: (ev: TypedPageTransitionEvent<T>) => any;
  onpageshow?: (ev: TypedPageTransitionEvent<T>) => any;
  onpopstate?: (ev: TypedPopStateEvent<T>) => any;
  onrejectionhandled?: (ev: TypedPromiseRejectionEvent<T>) => any;
  onstorage?: (ev: TypedStorageEvent<T>) => any;
  onunhandledrejection?: (ev: TypedPromiseRejectionEvent<T>) => any;
  onunload?: (ev: TypedEvent<T>) => any;
}
