import { GetType, AllAttributes, SVGAnimationAdditionAttributes, SVGAnimationAttributeTargetAttributes, SVGAnimationTimingAttributes, SVGAnimationValueAttributes, SVGConditionalProcessingAttributes, SVGCoreAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface animateTransform extends Partial<
    Pick<AllAttributes, 'by' | 'from' | 'to'>
    & SVGConditionalProcessingAttributes
    & SVGCoreAttributes
    & SVGEvents
    & SVGAnimationAttributeTargetAttributes
    & SVGAnimationTimingAttributes
    & SVGAnimationValueAttributes
    & SVGAnimationAdditionAttributes
    & GetType<'AnimateTransform'>
>{}