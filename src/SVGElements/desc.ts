import { SVGGenericAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface desc extends Partial<
    & SVGGenericAttributes
    & SVGEvents
>{}