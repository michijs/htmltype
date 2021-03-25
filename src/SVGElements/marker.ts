import { AllAttributes, SVGAnimationTargetElementAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface marker extends Partial<
    Pick<AllAttributes,
        'markerHeight'
        | 'markerUnits'
        | 'markerWidth'
        | 'orient'
        | 'preserveAspectRatio'
        | 'refX'
        | 'refY'
        | 'viewBox'
    >
    & SVGGenericAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAnimationTargetElementAttributes
>{}