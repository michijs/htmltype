import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feDisplacementMap extends Partial<
    Pick<AllAttributes,
        'in'
        | 'in2'
        | 'scale'
        | 'xChannelSelector'
        | 'yChannelSelector'
    >
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}