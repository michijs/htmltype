import { TypedBeforeUnloadEvent } from './TypedEventsr/TypedBeforeUnloadEvent';
import { TypedEvent } from './TypedEventsr/TypedEvent';
import { TypedMessageEvent } from './TypedEventsr/TypedMessageEvent';
import { TypedPageTransitionEvent } from './TypedEventsr/TypedPageTransitionEvent';
import { TypedPopStateEvent } from './TypedEventsr/TypedPopStateEvent';
import { TypedPromiseRejectionEvent } from './TypedEventsr/TypedPromiseRejectionEvent';
import { TypedStorageEvent } from './TypedEventsr/TypedStorageEvent';

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