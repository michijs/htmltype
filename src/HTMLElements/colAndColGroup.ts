import { GetAttributes, GlobalAttributes } from '../Attributes';

type colAndColGroup<T extends Element> = Partial<GlobalAttributes<T> & GetAttributes<'span'>>;
export interface col extends colAndColGroup<HTMLElementTagNameMap['col']>{}
export interface colgroup extends colAndColGroup<HTMLElementTagNameMap['colgroup']>{}