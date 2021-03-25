import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';

export interface script extends Partial<
    GlobalAttributes
    & GetAttributes<'async'
        | 'crossorigin'
        | 'defer'
        | 'integrity'
        | 'nomodule'
        | 'nonce'
        | 'referrerpolicy'
        | 'src'
    >
    & GetType<'Script'>
>{}