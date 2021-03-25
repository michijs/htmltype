import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface th extends Partial<
    GlobalAttributes
    & GetAttributes<'abbr'
        | 'colspan'
        | 'headers'
        | 'rowspan'
        | 'scope'
    >
    & GetRoles
>{}