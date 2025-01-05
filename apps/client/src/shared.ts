import { sparte } from ".";

// C'est hideux mais ça fera l'affaire

export type Sparte = typeof sparte
export const types = sparte['transformers']['$inferredTypes'];
export const command = sparte.command.bind(this);