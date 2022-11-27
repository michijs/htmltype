import { GlobalAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';
import { HTMLElements } from '../HTMLElements';

export interface a extends Partial<
    Omit<HTMLElements['a'], keyof GlobalAttributes<HTMLElementTagNameMap['a']>>
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['a']>
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}