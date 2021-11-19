import { GetMax, GetValue, GlobalAttributes } from '../Attributes';

export interface progress extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['progress']>
    & GetValue<number>
    & GetMax<number>
>{}