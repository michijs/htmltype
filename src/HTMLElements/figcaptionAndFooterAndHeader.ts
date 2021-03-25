import { GetRoles, GlobalAttributes } from '../Attributes';

type figcaptionAndFooterAndHeader = Partial<GlobalAttributes & GetRoles<'group' | 'none' | 'presentation'>>;
export interface figcaption extends figcaptionAndFooterAndHeader { }
export interface footer extends figcaptionAndFooterAndHeader { }
export interface header extends figcaptionAndFooterAndHeader { }