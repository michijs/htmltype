import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface track extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['track']>
    & GetAttributes<'default'
        | 'kind'
        | 'label'
        | 'src'
        | 'srclang'
    >
> { }