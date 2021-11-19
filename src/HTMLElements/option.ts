import { GetAttributes, GetValue, GlobalAttributes } from '../Attributes';

export interface option extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['option']>
    & GetAttributes<'disabled' | 'label' | 'selected'>
    & GetValue
>{}