import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface q extends Partial<
    GlobalAttributes
    & GetAttributes<'cite'>
    & GetRoles
>{}