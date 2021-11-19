
import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

type mod<T extends Element> = Partial<
    GlobalAttributes<T>
    & GetAttributes<'cite' | 'datetime'>
    & GetRoles
>
export interface ins extends mod<HTMLElementTagNameMap['ins']>{}
export interface del extends mod<HTMLElementTagNameMap['del']>{}