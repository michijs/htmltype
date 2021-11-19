import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface slot extends Partial<GlobalAttributes<HTMLElementTagNameMap['slot']> & GetAttributes<'name'>>{}