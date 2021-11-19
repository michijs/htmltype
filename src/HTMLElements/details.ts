import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface details extends Partial<GlobalAttributes<HTMLElementTagNameMap['details']> & GetAttributes<'open'>>{}