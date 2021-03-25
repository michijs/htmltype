import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feDiffuseLighting extends Partial<
    Pick<AllAttributes,
        'in'
        | 'surfaceScale'
        | 'diffuseConstant'
    >
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}