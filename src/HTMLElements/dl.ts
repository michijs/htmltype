import { GetRoles, GlobalAttributes } from '../Attributes';

export interface dl extends Partial<GlobalAttributes<HTMLElementTagNameMap['dl']> & GetRoles<'group' | 'list' | 'none' | 'presentation'>>{}