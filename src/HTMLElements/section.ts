import { GetRoles, GlobalAttributes } from '../Attributes';

export interface section extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['section']>
    & GetRoles<
        'alert'
        | 'alertdialog'
        | 'application'
        | 'banner'
        | 'complementary'
        | 'contentinfo'
        | 'dialog'
        | 'document'
        | 'feed'
        | 'log'
        | 'main'
        | 'marquee'
        | 'navigation'
        | 'none'
        | 'note'
        | 'presentation'
        | 'search'
        | 'status'
        | 'tabpanel'>
>{}