import { GetAttributes, GetMinAndMax, GetValue, GlobalAttributes } from '../Attributes';

export interface meter extends Partial<
    GlobalAttributes
    & GetAttributes<'high'
        | 'low'
        | 'optimum'
        | 'form'
    >
    & GetValue<number>
    & GetMinAndMax<number>
>{}