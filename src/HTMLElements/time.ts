import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface time extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['time']>
    & GetAttributes<'datetime'>
    & GetRoles
>{}