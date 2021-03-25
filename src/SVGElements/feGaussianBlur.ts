import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feGaussianBlur extends Partial<
    Pick<AllAttributes,
        'in'
        | 'stdDeviation'
        | 'edgeMode'
    >
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}