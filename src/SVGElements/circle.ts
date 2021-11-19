import { AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface circle extends Partial<
    Pick<AllAttributes, 'cx' | 'cy' | 'r' | 'pathLength'>
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['circle']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}