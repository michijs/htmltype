import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface map extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['map']>
    & GetAttributes<'name'>
>{}