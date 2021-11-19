import { GetRoles, GlobalAttributes } from '../Attributes';

export interface dt extends Partial<GlobalAttributes<HTMLElementTagNameMap['dt']> & GetRoles<'listitem'>>{}