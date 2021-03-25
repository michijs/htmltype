import { GetRoles, GlobalAttributes } from '../Attributes';

export interface hr extends Partial<GlobalAttributes & GetRoles<'presentation' | 'none'>>{}