import { GetType, AllAttributes, SVGAnimationTargetElementAttributes, SVGGenericAttributes } from '../Attributes';
import { SVGEvents } from '../Events';

export interface script extends Partial<
    Pick<AllAttributes, 'crossorigin'>
    & GetType<'Script'>
    & SVGAnimationTargetElementAttributes
    & SVGGenericAttributes
    & SVGEvents<SVGElementTagNameMap['script']>
>{}