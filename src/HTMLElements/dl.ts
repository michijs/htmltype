import { GetRoles, GlobalAttributes } from '../Attributes';

export interface dl extends Partial<GlobalAttributes & GetRoles<'group' | 'list' | 'none' | 'presentation'>>{}