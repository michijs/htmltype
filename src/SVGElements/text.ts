import { SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes, GetXY, AllAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface text extends Partial<
    Pick<AllAttributes,
        'dx'
        | 'dy'
        | 'rotate'
        | 'lengthAdjust'
        | 'textLength'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}