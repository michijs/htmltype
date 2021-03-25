import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface base extends Partial<
    GlobalAttributes
    & GetAttributes<'href'| 'target'>
>{}