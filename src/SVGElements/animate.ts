import { SVGAnimationAdditionAttributes, SVGAnimationAttributeTargetAttributes, SVGAnimationTimingAttributes, SVGAnimationValueAttributes, SVGGenericAttributes } from '../Attributes/SVGGlobalAttributes';
import { SVGEvents } from '../Events';

export interface animate extends Partial<SVGGenericAttributes
    & SVGEvents
    & SVGAnimationAttributeTargetAttributes
    & SVGAnimationTimingAttributes
    & SVGAnimationAdditionAttributes
    & SVGAnimationValueAttributes
>{}