import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface video extends Partial<
    GlobalAttributes
    & GetAttributes<'autoplay'
        | 'controls'
        | 'crossorigin'
        | 'height'
        | 'loop'
        | 'muted'
        | 'playsinline'
        | 'poster'
        | 'preload'
        | 'src'
        | 'width'
    >
    & GetRoles<'application'>
>{}