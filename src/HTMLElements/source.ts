import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';

export interface source extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['source']>
    & GetAttributes<'media' | 'sizes' | 'src' | 'srcset'>
    & GetType<'Source'>
>{}