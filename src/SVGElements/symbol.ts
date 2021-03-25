import { AllAttributes, GetXY, SVGAriaAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface _symbol extends Partial<
    Pick<AllAttributes,
        'height'
        | 'preserveAspectRatio'
        | 'refX'
        | 'refY'
        | 'viewBox'
        | 'width'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}