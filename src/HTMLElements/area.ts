import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface area extends Partial<
    GlobalAttributes
    & GetAttributes<
        'alt'
        | 'coords'
        | 'download'
        | 'href'
        | 'hreflang'
        | 'ping'
        | 'rel'
        | 'shape'
        | 'target'
    >
>{}