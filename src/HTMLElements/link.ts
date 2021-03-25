import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';

export interface link extends Partial<
    GlobalAttributes
    & GetAttributes<'as'
        | 'crossorigin'
        | 'disabled'
        | 'href'
        | 'hreflang'
        | 'imagesizes'
        | 'imagesrcset'
        | 'media'
        | 'referrerpolicy'
        | 'rel'
        | 'sizes'
        | 'title'
    >
    & GetType<'Link'>
>{}