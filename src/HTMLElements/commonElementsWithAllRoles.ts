import { GetRoles, GlobalAttributes } from '../Attributes';

export type commonElement<T extends Element = HTMLElement> = Partial<GlobalAttributes<T> & GetRoles>

export interface address extends commonElement<HTMLElementTagNameMap['address']>{}
export interface abbr extends commonElement<HTMLElementTagNameMap['abbr']>{}
export interface b extends commonElement<HTMLElementTagNameMap['b']>{}
export interface bdi extends commonElement<HTMLElementTagNameMap['bdi']>{}
export interface bdo extends commonElement<HTMLElementTagNameMap['bdo']>{}
export interface cite extends commonElement<HTMLElementTagNameMap['cite']>{}
export interface code extends commonElement<HTMLElementTagNameMap['code']>{}
export interface dfn extends commonElement<HTMLElementTagNameMap['dfn']>{}
export interface div extends commonElement<HTMLElementTagNameMap['div']>{}
export interface em extends commonElement<HTMLElementTagNameMap['em']>{}
export interface figure extends commonElement<HTMLElementTagNameMap['figure']>{}
export interface i extends commonElement<HTMLElementTagNameMap['i']>{}
export interface kbd extends commonElement<HTMLElementTagNameMap['kbd']>{}
export interface mark extends commonElement<HTMLElementTagNameMap['mark']>{}
export interface p extends commonElement<HTMLElementTagNameMap['p']>{}
export interface picture extends commonElement<HTMLElementTagNameMap['picture']>{}
export interface pre extends commonElement<HTMLElementTagNameMap['pre']>{}
export interface rp extends commonElement<HTMLElementTagNameMap['rp']>{}
export interface rt extends commonElement<HTMLElementTagNameMap['rt']>{}
export interface ruby extends commonElement<HTMLElementTagNameMap['ruby']>{}
export interface s extends commonElement<HTMLElementTagNameMap['s']>{}
export interface samp extends commonElement<HTMLElementTagNameMap['samp']>{}
export interface small extends commonElement<HTMLElementTagNameMap['small']>{}
export interface span extends commonElement<HTMLElementTagNameMap['span']>{}
export interface strong extends commonElement<HTMLElementTagNameMap['strong']>{}
export interface sub extends commonElement<HTMLElementTagNameMap['sub']>{}
export interface sup extends commonElement<HTMLElementTagNameMap['sup']>{}
export interface table extends commonElement<HTMLElementTagNameMap['table']>{}
export interface tfoot extends commonElement<HTMLElementTagNameMap['tfoot']>{}
export interface thead extends commonElement<HTMLElementTagNameMap['thead']>{}
export interface tr extends commonElement<HTMLElementTagNameMap['tr']>{}
export interface u extends commonElement<HTMLElementTagNameMap['u']>{}
export interface wbr extends commonElement<HTMLElementTagNameMap['wbr']>{}