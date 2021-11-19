import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface optgroup extends Partial<GlobalAttributes<HTMLElementTagNameMap['optgroup']> & GetAttributes<'disabled' | 'label'>>{}