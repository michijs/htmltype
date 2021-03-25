import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface output extends Partial<
    GlobalAttributes
    & GetAttributes<'for' | 'form' | 'name'>
    & GetRoles
>{}