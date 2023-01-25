import { TypedEvent } from './TypedEvent';

export interface TypedPromiseRejectionEvent<T> extends TypedEvent<T> {
    readonly promise: Promise<any>;
    readonly reason: any;
}