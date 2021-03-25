import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface dialog extends Partial<
    GlobalAttributes
    & GetAttributes<'open'>
    & GetRoles<'alertdialog'>
>{}