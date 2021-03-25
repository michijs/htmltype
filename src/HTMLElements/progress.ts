import { GetMax, GetValue, GlobalAttributes } from '../Attributes';

export interface progress extends Partial<
    GlobalAttributes
    & GetValue<number>
    & GetMax<number>
>{}