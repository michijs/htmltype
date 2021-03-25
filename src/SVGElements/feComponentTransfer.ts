import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feComponentTransfer extends Partial<
    Pick<AllAttributes, 'in'>
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}