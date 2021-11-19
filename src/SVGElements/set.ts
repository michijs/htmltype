import { AllAttributes, SVGAnimationAttributeTargetAttributes, SVGAnimationTimingAttributes, SVGGenericAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface set extends Partial<
    Pick<AllAttributes, 'to'>
    & SVGAnimationTimingAttributes
    & SVGAnimationAttributeTargetAttributes
    & SVGEvents<SVGElementTagNameMap['set']>
    & SVGGenericAttributes
>{}