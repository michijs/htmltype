import { AllAttributes, SVGAnimationAdditionAttributes, SVGAnimationAttributeTargetAttributes, SVGAnimationTimingAttributes, SVGAnimationValueAttributes, SVGGenericAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface animateMotion extends Partial<
    Pick<AllAttributes, 'keyPoints' | 'path' | 'rotate'>
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['animateMotion']>
    & SVGAnimationAttributeTargetAttributes
    & SVGAnimationTimingAttributes
    & SVGAnimationValueAttributes
    & SVGAnimationAdditionAttributes
>{}