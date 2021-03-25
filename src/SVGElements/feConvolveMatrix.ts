
import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feConvolveMatrix extends Partial<
    Pick<AllAttributes,
        'in'
        | 'order'
        | 'kernelMatrix'
        | 'divisor'
        | 'bias'
        | 'targetX'
        | 'targetY'
        | 'edgeMode'
        | 'preserveAlpha'
    >
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
> { }