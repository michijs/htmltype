import { GetAttributes, GetRoles, GetType, GlobalAttributes } from '../Attributes';

export interface embed extends Partial<
    GlobalAttributes
    & GetAttributes<'height'
        | 'src'
        | 'width'
    >
    & GetType<'Embed'>
    & GetRoles<'application' | 'document' | 'img' | 'none' | 'presentation'>
>{}