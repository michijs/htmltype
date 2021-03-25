import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface audio extends Partial<
    GlobalAttributes
    & GetAttributes<'autoplay'
        | 'controls'
        | 'crossorigin'
        | 'loop'
        | 'muted'
        | 'preload'
        | 'src'
    >
    & GetRoles<'application'>
>{}