export type { Sparte } from './sparte';
import { Sparte } from "./sparte";

export { database } from '../../manager/src/index';


export const args_map = {
    'on': 1,
    'off': 0
} as const;

//export const s = Sparte('MTMyNDQ4MzQ5NzMxMzgyODg3NQ.GoHdSU.t6Onw87uBptgdfXww5J5K6gFJeVFEvSvFbItF4');
export function parseVars(content: string) {
    return '';
}

export enum vars {
    '{friends}',
}