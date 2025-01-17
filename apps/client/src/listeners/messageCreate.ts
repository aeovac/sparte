import type { Message } from "../typings";
import type { Sparte } from "../shared";

export async function messageCreate(sparte: Sparte, message: Message) {
    if(!message.content.startsWith('!')) {
        return;
    }

    const args = message.content
        ?.slice('!'.length)
        .trim()
        .split(/\s+/g);

    const text = args.join(' ');
    const command = sparte
        .getCommands()
        .find(({ name, aliases }) => (
            text.startsWith(name) || aliases.some((alias) => text.startsWith(alias))
        ));
    
    if(command) {
        await command.callback(
            sparte,
            message, 
            args.slice(command.name.split(' ').length)
        );
    }

};