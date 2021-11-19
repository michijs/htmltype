import { AllAttributes, GetXY, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface foreignObject extends Partial<
    Pick<AllAttributes,
        'width'
        | 'height'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['foreignObject']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}