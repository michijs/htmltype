import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface canvas extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['canvas']>
    & GetAttributes<'width' | 'height'>
    & GetRoles
>{}