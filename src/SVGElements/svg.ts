import { GetXY, AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface svg extends Partial<
    Pick<AllAttributes,
        'height'
        | 'preserveAspectRatio'
        | 'viewBox'
        | 'width'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}