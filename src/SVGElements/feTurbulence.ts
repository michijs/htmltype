import { GetType, AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes } from '../Attributes';

export interface feTurbulence extends Partial<
    Pick<AllAttributes,
        'baseFrequency'
        | 'numOctaves'
        | 'seed'
        | 'stitchTiles'
    >
    & GetType<'FeTurbulence'>
    & SVGGenericAttributes
    & SVGPresentationAttributes
    & SVGFilterPrimitiveAttributes
>{}