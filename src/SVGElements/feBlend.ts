import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feBlend extends Partial<
    Pick<AllAttributes, 'in' | 'in2' | 'mode'>
    & SVGGenericAttributes
    & SVGFilterPrimitiveAttributes
    & SVGPresentationAttributes
>{}