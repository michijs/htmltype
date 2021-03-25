import { GetAttributes, GetType, GetValue, GetRoles, GlobalAttributes } from '../Attributes';

export interface button extends Partial<
    GlobalAttributes
    & GetAttributes<'autofocus'
        | 'disabled'
        | 'form'
        | 'formaction'
        | 'formenctype'
        | 'formmethod'
        | 'formnovalidate'
        | 'formtarget'
        | 'name'
    >
    & GetValue
    & GetRoles<'checkbox' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'switch' | 'tab'>
    & GetType<'Button'>
>{}