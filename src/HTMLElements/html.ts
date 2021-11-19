import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface html extends Partial<GlobalAttributes<HTMLElementTagNameMap['html']> & GetAttributes<'xmlns'>> { }