import { GetXY, AllAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface mask extends Partial<
    Pick<AllAttributes,
        'height'
        | 'maskContentUnits'
        | 'maskUnits'
        | 'width'
    >
    & GetXY
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}