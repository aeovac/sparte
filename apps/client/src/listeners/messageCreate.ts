import type { Message } from "../typings";
import type { Sparte } from "../shared";

export async function messageCreate(sparte: Sparte, message: Message) {
    if(!message.content?.startsWith('!')) {
        return;
    }

    const args = message.content
        ?.slice('!'.length)
        .trim()
        .split(/\s+/g);

    const command = sparte
        .getCommands()
        .find(({ name }) => (args.join(' ').startsWith(name)));

    if(!command) return;

    await command.callback(
        sparte,
        message, 
        args
    );
};