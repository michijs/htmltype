import { GetAttributes, GetRoles, GetType, GlobalAttributes } from '../Attributes';

export interface embed extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['embed']>
    & GetAttributes<'height'
        | 'src'
        | 'width'
    >
    & GetType<'Embed'>
    & GetRoles<'application' | 'document' | 'img' | 'none' | 'presentation'>
>{}