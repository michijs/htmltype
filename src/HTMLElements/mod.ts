
import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

type mod = Partial<
    GlobalAttributes
    & GetAttributes<'cite' | 'datetime'>
    & GetRoles
>
export interface ins extends mod{}
export interface del extends mod{}