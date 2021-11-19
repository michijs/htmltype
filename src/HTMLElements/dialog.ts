import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface dialog extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['dialog']>
    & GetAttributes<'open'>
    & GetRoles<'alertdialog'>
>{}