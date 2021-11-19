import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface blockquote extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['blockquote']>
    & GetAttributes<'cite'>
    & GetRoles
>{}