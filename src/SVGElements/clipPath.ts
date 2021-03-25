import { AllAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface clipPath extends Partial<
    Pick<AllAttributes, 'clipPathUnits'>
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}