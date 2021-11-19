import { GetAttributes, GetRel, GlobalAttributes } from '../Attributes';

export interface area extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['area']>
    & GetAttributes<
        'alt'
        | 'coords'
        | 'download'
        | 'href'
        | 'hreflang'
        | 'ping'
        | 'shape'
        | 'target'
    >
    & GetRel<'alternate'
        | 'author'
        | 'bookmark'
        | 'external'
        | 'help'
        | 'license'
        | 'next'
        | 'nofollow'
        | 'noopener'
        | 'noreferrer'
        | 'prev'
        | 'search'
        | 'tag'
    >
> { }