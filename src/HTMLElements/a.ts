import { GetAttributes, GetType, GetRoles, GetRel } from '../Attributes';
import { GlobalAttributes } from '../Attributes/GlobalAttributes';

export interface a extends Partial<
    GlobalAttributes
    & GetAttributes<'download'
        | 'href'
        | 'hreflang'
        | 'ping'
        | 'target'
    > 
    & GetType<'A'>
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
    & GetRoles<'button'
        | 'checkbox'
        | 'menuitem'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'radio'
        | 'switch'
        | 'tab'
        | 'treeitem'
    >
> { }