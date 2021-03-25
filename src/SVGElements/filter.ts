import { AllAttributes, SVGGenericAttributes, SVGPresentationAttributes, GetXY } from '../Attributes';

export interface filter extends Partial<
    Pick<AllAttributes,
        'width'
        | 'height'
        | 'filterUnits'
        | 'primitiveUnits'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGPresentationAttributes
>{}