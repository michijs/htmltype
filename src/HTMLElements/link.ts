import { GetAttributes, GetRel, GetType, GlobalAttributes } from '../Attributes';

export interface link extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['link']>
    & GetAttributes<'as'
        | 'crossorigin'
        | 'disabled'
        | 'href'
        | 'hreflang'
        | 'imagesizes'
        | 'imagesrcset'
        | 'media'
        | 'referrerpolicy'
        | 'sizes'
        | 'title'
    >
    & GetRel<'alternate'
    | 'author'
    | 'canonical'
    | 'help'
    | 'icon'
    | 'license'
    | 'manifest'
    | 'modulepreload'
    | 'next'
    | 'pingback'
    | 'preconnect'
    | 'prefetch'
    | 'preload'
    | 'prev'
    | 'search'
    | 'shortlink'
    | 'stylesheet'
>
    & GetType<'Link'>
>{}