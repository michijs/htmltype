import { GetRoles, GlobalAttributes } from '../Attributes';

export interface hr extends Partial<GlobalAttributes<HTMLElementTagNameMap['hr']> & GetRoles<'presentation' | 'none'>>{}