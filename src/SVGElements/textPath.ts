import { AllAttributes, SVGAriaAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface textPath extends Partial<
    Pick<AllAttributes,
        'dx'
        | 'dy'
        | 'rotate'
        | 'lengthAdjust'
        | 'textLength'
    >
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGEvents<SVGElementTagNameMap['textPath']>
    & SVGPresentationAttributes
    & SVGAriaAttributes
>{}