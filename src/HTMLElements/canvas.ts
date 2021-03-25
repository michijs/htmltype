import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface canvas extends Partial<
    GlobalAttributes
    & GetAttributes<'width' | 'height'>
    & GetRoles
>{}