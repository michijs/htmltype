import { GetType, SVGGenericAttributes, AllAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface style extends Partial<
    Pick<AllAttributes, 'media' | 'title'>
    & GetType<'Style'>
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['style']>
>{}