import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface base extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['base']>
    & GetAttributes<'href'| 'target'>
>{}