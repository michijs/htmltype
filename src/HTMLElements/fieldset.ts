import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';

export interface fieldset extends Partial<
    GlobalAttributes
    & GetAttributes<'disabled'
        | 'form'
        | 'name'
    >
    & GetRoles<'radiogroup' | 'presentation' | 'none'>
>{}