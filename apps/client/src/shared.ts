export type { Sparte } from './sparte';
import { Sparte } from "./sparte";

export const sparte = Sparte('token');
export const command = sparte.command.bind(this);