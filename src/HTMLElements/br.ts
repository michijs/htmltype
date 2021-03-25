import { GetRoles, GlobalAttributes } from '../Attributes';

export interface br extends Partial<
    GlobalAttributes
    & GetRoles<'none' | 'presentation'>
>{}