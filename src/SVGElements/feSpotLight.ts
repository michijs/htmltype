import { AllAttributes, SVGCoreAttributes, GetXYZ } from '../Attributes';

export interface feSpotLight extends Partial<
    Pick<AllAttributes,
        'pointsAtX'
        | 'pointsAtY'
        | 'pointsAtZ'
        | 'specularExponent'
        | 'limitingConeAngle'>
    & SVGCoreAttributes
    & GetXYZ
>{}