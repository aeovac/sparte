import * as Discord from '@sparte/discordeno';
import { createBot } from '@sparte/discordeno';
import { messageCreate } from './listeners/messageCreate';
import type { Command } from './typings';

export function Sparte(token: string) {
    const bot = createBot({
        token: '',
        desiredProperties: {
            message: {
                content: true
            }
        },
        events: {
            messageCreate(message) {
                messageCreate(sparte, message)
            }
        }
    });

    const commands: Set<Command.Raw> = new Set();
    const sparte = {
        ...bot,
        commands,
        getCommands,
        command
    }
    function command(cmd: Command.Structure) {
        function parse(cmd: Command.Structure): Command.Raw {
            return {}
        }

        commands.add(parse(cmd));
    }

    function getCommands(): Command.Structure[] {
        return [] as any;
    }   



    return sparte;
}