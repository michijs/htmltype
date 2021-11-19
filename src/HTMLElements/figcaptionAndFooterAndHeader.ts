import { GetRoles, GlobalAttributes } from '../Attributes';

type figcaptionAndFooterAndHeader<T extends Element> = Partial<GlobalAttributes<T> & GetRoles<'group' | 'none' | 'presentation'>>;
export interface figcaption extends figcaptionAndFooterAndHeader<HTMLElementTagNameMap['figcaption']> { }
export interface footer extends figcaptionAndFooterAndHeader<HTMLElementTagNameMap['footer']> { }
export interface header extends figcaptionAndFooterAndHeader<HTMLElementTagNameMap['header']> { }