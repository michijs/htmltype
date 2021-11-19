import { GlobalAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';
import { a as HTMLA } from '../HTMLElements';

export interface a extends Partial<
    Omit<HTMLA, keyof GlobalAttributes<HTMLElementTagNameMap['a']>>
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['a']>
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}