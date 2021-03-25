import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface td extends Partial<
    GlobalAttributes
    & GetAttributes<'colspan' | 'headers' | 'rowspan'>
    & GetRoles
>{}