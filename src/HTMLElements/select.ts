import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface select extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['select']>
    & GetAttributes<'autocomplete'
        | 'autofocus'
        | 'disabled'
        | 'form'
        | 'multiple'
        | 'name'
        | 'required'
        | 'size'
    >
    /**
    * TODO: menu with no multiple attribute and no size attribute greater than 1, otherwise no role permitted
    */
    & GetRoles<'menu'>
>{}