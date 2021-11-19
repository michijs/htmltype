import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface label extends Partial<GlobalAttributes<HTMLElementTagNameMap['label']> & GetAttributes<'for'>>{}