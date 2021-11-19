import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface audio extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['audio']>
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