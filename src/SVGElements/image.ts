import { AllAttributes, GetXY, SVGAnimationTargetElementAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface image extends Partial<
    Pick<AllAttributes,
        'width'
        | 'height'
        | 'preserveAspectRatio'
        | 'crossorigin'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAriaAttributes
    & SVGAnimationTargetElementAttributes
>{}