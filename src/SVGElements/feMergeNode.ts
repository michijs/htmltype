import { AllAttributes, SVGCoreAttributes } from '../Attributes';

export interface feMergeNode extends Partial<
    Pick<AllAttributes, 'in'>
    & SVGCoreAttributes
>{}