import { SVGGenericAttributes, SVGPresentationAttributes, AllAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface stop extends Partial<
    Pick<AllAttributes, 'offset'>
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['stop']>
    & SVGPresentationAttributes
>{}