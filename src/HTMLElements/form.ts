import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface form extends Partial<
    GlobalAttributes
    & GetAttributes<'accept-charset'
        | 'autocomplete'
        | 'name'
        | 'rel'
        | 'action'
        | 'enctype'
        | 'method'
        | 'novalidate'
        | 'target'
    >
    & GetRoles<'search' | 'none' | 'presentation'>
>{}