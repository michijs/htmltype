import { TypedBeforeUnloadEvent } from './typedEvents/TypedBeforeUnloadEvent';
import { TypedEvent } from './typedEvents/TypedEvent';
import { TypedMessageEvent } from './typedEvents/TypedMessageEvent';
import { TypedPageTransitionEvent } from './typedEvents/TypedPageTransitionEvent';
import { TypedPopStateEvent } from './typedEvents/TypedPopStateEvent';
import { TypedPromiseRejectionEvent } from './typedEvents/TypedPromiseRejectionEvent';
import { TypedStorageEvent } from './typedEvents/TypedStorageEvent';

export interface WindowEvents<T> {
    onafterprint: ((ev: TypedEvent<T>) => any) | null;
    onbeforeprint: ((ev: TypedEvent<T>) => any) | null;
    onbeforeunload: ((ev: TypedBeforeUnloadEvent<T>) => any) | null;
    ongamepadconnected: ((ev: TypedEvent<T>) => any) | null;
    ongamepaddisconnected: ((ev: TypedEvent<T>) => any) | null;
    onhashchange: ((ev: TypedEvent<T>) => any) | null;
    onlanguagechange: ((ev: TypedEvent<T>) => any) | null;
    onmessage: ((ev: TypedMessageEvent<T>) => any) | null;
    onmessageerror: ((ev: TypedMessageEvent<T>) => any) | null;
    onoffline: ((ev: TypedEvent<T>) => any) | null;
    ononline: ((ev: TypedEvent<T>) => any) | null;
    onpagehide: ((ev: TypedPageTransitionEvent<T>) => any) | null;
    onpageshow: ((ev: TypedPageTransitionEvent<T>) => any) | null;
    onpopstate: ((ev: TypedPopStateEvent<T>) => any) | null;
    onrejectionhandled: ((ev: TypedPromiseRejectionEvent<T>) => any) | null;
    onstorage: ((ev: TypedStorageEvent<T>) => any) | null;
    onunhandledrejection: ((ev: TypedPromiseRejectionEvent<T>) => any) | null;
    onunload: ((ev: TypedEvent<T>) => any) | null;
}