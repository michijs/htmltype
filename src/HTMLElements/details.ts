import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface details extends Partial<GlobalAttributes & GetAttributes<'open'>>{}