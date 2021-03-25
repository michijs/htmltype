import { GetXYZ, SVGCoreAttributes } from '../Attributes';

export interface fePointLight extends Partial<
    SVGCoreAttributes & GetXYZ
>{}