import * as Discord from '@sparte/discordeno';
import { createBot } from '@sparte/discordeno';
import { messageCreate } from './listeners/messageCreate';
import type { CommandStructure } from './typings';

export type Sparte = ReturnType<typeof Sparte>;
export function Sparte(token: string) {

    const bot = createBot({
        token,
        desiredProperties: {
            message: {
                channelId: true,
                member: true,
                id: true,
                content: true,
                mentions: true
            },
            guild: {
                members: true
            },
            member: {
                permissions: true,
            }
        },
        events: {
            messageCreate(message) {
                messageCreate(sparte, message)
            }
        }
    });

    const commands: Set<CommandStructure> = new Set();
    const sparte = {
        ...bot,
        commands,
        getCommands,
        command
    }
    
    function command(cmd: CommandStructure) {
        //

        commands.add(cmd);
    }

    function getCommands(): CommandStructure[] {
        return Array.from(commands);
    }   



    return sparte;
}