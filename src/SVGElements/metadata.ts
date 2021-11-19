import { SVGCoreAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface metadata extends Partial<SVGCoreAttributes & SVGEvents<SVGElementTagNameMap['metadata']>>{}