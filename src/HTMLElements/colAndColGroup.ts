import { GetAttributes, GlobalAttributes } from '../Attributes';

type colAndColGroup = Partial<GlobalAttributes & GetAttributes<'span'>>;
export interface col extends colAndColGroup{}
export interface colgroup extends colAndColGroup{}