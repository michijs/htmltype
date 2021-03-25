import { GetRoles, GlobalAttributes } from '../Attributes';

export interface dt extends Partial<GlobalAttributes & GetRoles<'listitem'>>{}