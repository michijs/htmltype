import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface td extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['td']>
    & GetAttributes<'colspan' | 'headers' | 'rowspan'>
    & GetRoles
>{}