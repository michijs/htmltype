import { GetAttributes, GetValue, GlobalAttributes } from '../Attributes';

export interface option extends Partial<
    GlobalAttributes
    & GetAttributes<'disabled' | 'label' | 'selected'>
    & GetValue
>{}