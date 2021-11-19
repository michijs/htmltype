import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface video extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['video']>
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