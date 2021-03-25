import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface blockquote extends Partial<
    GlobalAttributes
    & GetAttributes<'cite'>
    & GetRoles
>{}