import { AllAttributes, SVGAriaAttributes, SVGCoreAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface view extends Partial<
    Pick<AllAttributes, 'viewBox' | 'preserveAspectRatio'>
    & SVGCoreAttributes
    & SVGEvents
    & SVGAriaAttributes
>{}