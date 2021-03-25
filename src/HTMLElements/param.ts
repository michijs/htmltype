import { GetAttributes, GetValue, GlobalAttributes } from '../Attributes';

export interface param extends Partial<
    GlobalAttributes
    & GetAttributes<'name'>
    & GetValue
>{}