import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface fieldset extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['fieldset']>
    & GetAttributes<'disabled'
        | 'form'
        | 'name'
    >
    & GetRoles<'radiogroup' | 'presentation' | 'none'>
>{}