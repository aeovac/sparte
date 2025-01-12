import { sparte } from "./index";

export type Sparte = typeof sparte;
export const command = sparte.command.bind(this);