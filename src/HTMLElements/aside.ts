import { GetRoles, GlobalAttributes } from '../Attributes';

export interface aside extends Partial<
    GlobalAttributes
    & GetRoles<'feed' | 'none' | 'note' | 'presentation' | 'region' | 'search'>
>{}