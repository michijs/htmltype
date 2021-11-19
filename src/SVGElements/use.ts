import { AllAttributes, GetXY, SVGAnimationTargetElementAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface use extends Partial<
    Pick<AllAttributes, 'width' | 'height'>
    & GetXY
    & SVGAnimationTargetElementAttributes
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['use']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}