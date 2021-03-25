import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface time extends Partial<
    GlobalAttributes
    & GetAttributes<'datetime'>
    & GetRoles
>{}