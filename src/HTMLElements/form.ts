import { GetAttributes, GetRel, GetRoles, GlobalAttributes } from '../Attributes';

export interface form extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['form']>
    & GetAttributes<'accept-charset'
        | 'autocomplete'
        | 'name'
        | 'action'
        | 'enctype'
        | 'method'
        | 'novalidate'
        | 'target'
    >
    & GetRel<'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noopener'
    | 'noreferrer'
    | 'prev'
    | 'search'
    >
    & GetRoles<'search' | 'none' | 'presentation'>
>{}