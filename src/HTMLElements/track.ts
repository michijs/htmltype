import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface track extends Partial<
    GlobalAttributes
    & GetAttributes<'default'
        | 'kind'
        | 'label'
        | 'src'
        | 'srclang'
    >
> { }