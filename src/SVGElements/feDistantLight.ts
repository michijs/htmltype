import { AllAttributes, SVGCoreAttributes } from '../Attributes';

export interface feDistantLight extends Partial<
    Pick<AllAttributes, 'azimuth' | 'elevation'> & SVGCoreAttributes
>{}