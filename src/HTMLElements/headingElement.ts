import { GetRoles, GlobalAttributes } from '../Attributes';

export type headingElement<T extends Element> = Partial<GlobalAttributes<T> & GetRoles<'tab' | 'presentation' | 'none'>>;
export interface h1 extends headingElement<HTMLElementTagNameMap['h1']>{}
export interface h2 extends headingElement<HTMLElementTagNameMap['h2']>{}
export interface h3 extends headingElement<HTMLElementTagNameMap['h3']>{}
export interface h4 extends headingElement<HTMLElementTagNameMap['h4']>{}
export interface h5 extends headingElement<HTMLElementTagNameMap['h5']>{}
export interface h6 extends headingElement<HTMLElementTagNameMap['h6']>{}