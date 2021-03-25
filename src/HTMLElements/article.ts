import { GlobalAttributes, GetRoles } from '../Attributes';

export interface article extends Partial<
    GlobalAttributes
    & GetRoles<'application' | 'document' | 'feed' | 'main' | 'none' | 'presentation' | 'region'>
>{}