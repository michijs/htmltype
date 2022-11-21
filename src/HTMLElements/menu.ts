import { GetRoles, GlobalAttributes } from '../Attributes';

export interface menu extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['menu']>
    & GetRoles<'directory' | 'group' | 'listbox' | 'menu' | 'menubar' | 'none' | 'presentation' | 'radiogroup' | 'tablist' | 'toolbar' | 'tree'>
>{}