import { GlobalAttributes } from '../Attributes';

export type commonElementWithoutRoles<T extends Element = HTMLElement> = Partial<GlobalAttributes<T>>

export interface caption extends commonElementWithoutRoles<HTMLElementTagNameMap['caption']>{}
export interface datalist extends commonElementWithoutRoles<HTMLElementTagNameMap['datalist']>{}
export interface dd extends commonElementWithoutRoles<HTMLElementTagNameMap['dd']>{}
export interface head extends commonElementWithoutRoles<HTMLElementTagNameMap['head']>{}
export interface legend extends commonElementWithoutRoles<HTMLElementTagNameMap['legend']>{}
export interface main extends commonElementWithoutRoles<HTMLElementTagNameMap['main']>{}
export interface nav extends commonElementWithoutRoles<HTMLElementTagNameMap['nav']>{}
export interface noscript extends commonElementWithoutRoles<HTMLElementTagNameMap['noscript']>{}
export interface summary extends commonElementWithoutRoles<HTMLElementTagNameMap['summary']>{}
export interface tbody extends commonElementWithoutRoles<HTMLElementTagNameMap['tbody']>{}
export interface template extends commonElementWithoutRoles<HTMLElementTagNameMap['template']>{}
export interface title extends commonElementWithoutRoles<HTMLElementTagNameMap['title']>{}
export interface _var extends commonElementWithoutRoles<HTMLElementTagNameMap['var']>{}