import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface iframe extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['iframe']>
    & GetAttributes<'allow'
        | 'height'
        | 'name'
        | 'referrerpolicy'
        | 'sandbox'
        | 'src'
        | 'srcdoc'
        | 'width'
    >
    & GetRoles<'application' | 'document' | 'img' | 'none' | 'presentation'>
>{}