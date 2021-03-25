import { GetXY, AllAttributes, SVGAnimationTargetElementAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface pattern extends Partial<
    Pick<AllAttributes,
        'height'
        | 'patternContentUnits'
        | 'patternTransform'
        | 'patternUnits'
        | 'preserveAspectRatio'
        | 'viewBox'
        | 'width'
    >
    & GetXY
    & SVGAnimationTargetElementAttributes
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}