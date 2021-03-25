import { GetAttributes, GetRoles, GetType, GlobalAttributes } from '../Attributes';

export interface ol extends Partial<
    GlobalAttributes
    & GetType<'Ol'>
    & GetAttributes<'reversed' | 'start'>
    & GetRoles<'directory' | 'group' | 'listbox' | 'menu' | 'menubar' | 'none' | 'presentation' | 'radiogroup' | 'tablist' | 'toolbar' | 'tree'>
>{}