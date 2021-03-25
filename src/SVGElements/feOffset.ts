import { GetDxAndDy, AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feOffset extends Partial<
    Pick<AllAttributes,'in'>
    & GetDxAndDy
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}