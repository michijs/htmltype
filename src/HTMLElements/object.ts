import { GetAttributes, GetType, GetRoles, GlobalAttributes } from '../Attributes';

type ObjectType = Partial<
    GlobalAttributes<HTMLElementTagNameMap['object']>
    & GetAttributes<
        'form'
        | 'height'
        | 'name'
        | 'typemustmatch'
        | 'usemap'
        | 'width'
    >
    & GetRoles<'application' | 'document' | 'img'>
> & GetType<'Object'> & GetAttributes<'data'>

export interface _object extends ObjectType { }