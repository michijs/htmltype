import { GetRoles, GlobalAttributes } from '../Attributes';

export interface br extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['br']>
    & GetRoles<'none' | 'presentation'>
>{}