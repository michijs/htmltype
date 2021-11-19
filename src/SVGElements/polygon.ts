import { AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface polygon extends Partial<
    Pick<AllAttributes, 'points' | 'pathLength'>
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['polygon']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}