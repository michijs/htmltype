import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feComposite extends Partial<
    Pick<AllAttributes, 'in' | 'in2' | 'operator' | 'k1' | 'k2' | 'k3' | 'k4'>
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}