import { GlobalAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';
import { a as HTMLA } from '../HTMLElements';

export interface a extends Partial<
    Omit<HTMLA, keyof GlobalAttributes>
    & SVGGenericAttributes
    & SVGEvents
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}