import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface output extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['output']>
    & GetAttributes<'for' | 'form' | 'name'>
    & GetRoles
>{}