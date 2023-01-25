import { GlobalEvents } from '.';
import { TypedClipboardEvent } from './TypedEvents/TypedClipboardEvent';
import { TypedEvent } from './TypedEvents/TypedEvent';

interface TypedElementEvent<T> {
    onfullscreenchange: TypedEvent<T>;
    onfullscreenerror: TypedEvent<T>;
}

interface TypedDocumentAndElementEventHandlers<T> {
    oncopy: ((ev: TypedClipboardEvent<T>) => any) | null;
    oncut: ((ev: TypedClipboardEvent<T>) => any) | null;
    onpaste: ((ev: TypedClipboardEvent<T>) => any) | null;
}

// Based on SVGElementEventMap
export interface SVGEvents<T extends Element> extends GlobalEvents<T>, TypedElementEvent<T>, TypedDocumentAndElementEventHandlers<T> { }
