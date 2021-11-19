import { GetAttributes, GetValue, GlobalAttributes } from '../Attributes';

export interface param extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['param']>
    & GetAttributes<'name'>
    & GetValue
>{}