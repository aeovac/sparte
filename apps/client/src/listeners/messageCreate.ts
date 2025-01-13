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

    const command = sparte
        .getCommands()
        .find(({ name, aliases }) => {
            const z = args.join(' ');
            return z.startsWith(name) || aliases.find((aliase) => (
                z.startsWith(aliase)
            ))
        });
    
    if(command) {
        args.shift();

        await command.callback(
            sparte,
            message, 
            args
        );
    }

};