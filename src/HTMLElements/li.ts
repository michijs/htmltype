import { GetRoles, GetValue, GlobalAttributes } from '../Attributes';

export interface li extends Partial<
    GlobalAttributes
    & GetValue<number>
    & GetRoles<'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'none' | 'presentation' | 'radio' | 'separator' | 'tab' | 'treeitem'>
>{}