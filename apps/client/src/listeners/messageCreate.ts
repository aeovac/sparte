import type { Sparte } from "../shared";
import { types } from "../shared";

// Gestion des évennements simple :
// Nous n'avons pas besoin de coder un handler et ça économise de la mémoire (cache)
export async function messageCreate(sparte: Sparte, message: typeof types.message) {
    if(!message.content?.startsWith('!')) {
        return;
    }

    const values = message.content
        ?.slice('!'.length)
        .trim()
        .split(/\s+/g);

    const command = sparte
        .getCommands()
        .find(({ name }) => (values.join('').startsWith(name)));

    if(!command) return;

    await command.callback(
        sparte,
        message, 
        values
    );
};