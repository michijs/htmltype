import { SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface g extends Partial<
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['g']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}