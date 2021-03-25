import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface html extends Partial<GlobalAttributes& GetAttributes<'xmlns'>>{}