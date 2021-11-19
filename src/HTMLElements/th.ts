import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface th extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['th']>
    & GetAttributes<'abbr'
        | 'colspan'
        | 'headers'
        | 'rowspan'
        | 'scope'
    >
    & GetRoles
>{}