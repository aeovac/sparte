export type { Sparte } from './sparte';
import { Sparte } from "./sparte";

export { database } from '../../manager/src/index';

export const sparte = Sparte('token');
export function parseVars(content: string) {
    return '';
}

export enum vars {
    '{friends}',
}