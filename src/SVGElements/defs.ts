import { SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface defs extends Partial<
    & SVGGenericAttributes
    & SVGEvents
    & SVGPresentationAttributes
>{}