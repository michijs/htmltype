import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';

export interface script extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['script']>
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