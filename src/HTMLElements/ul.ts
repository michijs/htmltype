import { GetRoles, GlobalAttributes } from '../Attributes';

export interface ul extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['ul']>
    & GetRoles<'directory' | 'group' | 'listbox' | 'menu' | 'menubar' | 'none' | 'presentation' | 'radiogroup' | 'tablist' | 'toolbar' | 'tree'>
>{}