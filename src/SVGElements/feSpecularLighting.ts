import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feSpecularLighting extends Partial<
    Pick<AllAttributes,
        'in'
        | 'surfaceScale'
        | 'specularConstant'
        | 'specularExponent'
    >
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}