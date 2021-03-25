import { AllAttributes, SVGAnimationTargetElementAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface radialGradient extends Partial<
    Pick<AllAttributes,
        'cx'
        | 'cy'
        | 'fr'
        | 'fx'
        | 'fy'
        | 'gradientUnits'
        | 'gradientTransform'
        | 'r'
        | 'spreadMethod'
    >
    & SVGAnimationTargetElementAttributes
    & SVGGenericAttributes
    & SVGEvents
    & SVGPresentationAttributes
>{}