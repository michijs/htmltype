import { GetRoles, GlobalAttributes } from '../Attributes';

export interface aside extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['aside']>
    & GetRoles<'feed' | 'none' | 'note' | 'presentation' | 'region' | 'search'>
>{}