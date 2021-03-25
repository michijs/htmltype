import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';

export interface style extends Partial<
    GlobalAttributes
    & GetAttributes<'media' | 'nonce' | 'title'>
    & GetType<'Style'>
>{}