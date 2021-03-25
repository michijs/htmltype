import { AllAttributes, SVGFilterPrimitiveAttributes, SVGGenericAttributes, SVGPresentationAttributes, GetType, GetValues } from '../Attributes';

export interface feColorMatrix extends Partial<
    Pick<AllAttributes, 'in'>
    /**
     * TODO: Default value	If type="matrix", identity matrix,
if type="saturate", 1, resulting in identity matrix,
if type="hueRotate", 0, resulting in identity matrix
     */
    & GetValues
    & GetType<'FeColorMatrix'>
    & SVGGenericAttributes
    & SVGFilterPrimitiveAttributes
    & SVGPresentationAttributes
>{}