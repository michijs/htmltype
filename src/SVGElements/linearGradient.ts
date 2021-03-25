import { AllAttributes, SVGAnimationTargetElementAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface linearGradient extends Partial<
    Pick<AllAttributes,
        'gradientUnits'
        | 'gradientTransform'
        | 'spreadMethod'
        | 'x1'
        | 'x2'
        | 'y1'
        | 'y2'
    >
    & SVGGenericAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAnimationTargetElementAttributes
>{}