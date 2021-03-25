import { AriaAttributes } from './AriaAttributes';
import { GlobalEvents } from '../Events';
import { AllAttributes } from './AllAttributes';

export interface GlobalAttributes extends AriaAttributes,
    GlobalEvents,
    Pick<AllAttributes,
    'accessKey'
    | 'autocapitalize'
    | 'class'
    | 'contenteditable'
    | 'dir'
    | 'draggable'
    | 'enterkeyhint'
    | 'hidden'
    | 'id'
    | 'inputmode'
    | 'is'
    | 'itemid'
    | 'itemprop'
    | 'itemref'
    | 'itemscope'
    | 'itemtype'
    | 'lang'
    | 'nonce'
    | 'part'
    | 'slot'
    | 'spellcheck'
    | 'style'
    | 'tabindex'
    | 'title'
    | 'translate'
    > {
}
