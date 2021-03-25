import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface optgroup extends Partial<GlobalAttributes & GetAttributes<'disabled' | 'label'>>{}