
import { GlobalAttributes } from '../Attributes';
import { WindowEvents } from '../Events';

export interface body extends Partial<
    GlobalAttributes<HTMLElementTagNameMap['body']>
    & WindowEvents<HTMLElementTagNameMap['body']>
>{}