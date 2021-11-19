import { GetXY, AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface tspan extends Partial<
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
    & SVGEvents<SVGElementTagNameMap['tspan']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}