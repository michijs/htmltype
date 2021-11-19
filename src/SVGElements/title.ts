import { SVGGenericAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface title extends Partial<SVGGenericAttributes & SVGEvents<SVGElementTagNameMap['title']>>{}