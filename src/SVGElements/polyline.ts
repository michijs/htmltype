import { AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface polyline extends Partial<
    Pick<AllAttributes, 'points' | 'pathLength'>
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['polyline']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}