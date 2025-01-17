import * as Discord from '@sparte/discordeno';
import { createBot } from '@sparte/discordeno';
import { messageCreate } from './listeners/messageCreate';
import type { CommandStructure } from './typings';
import { Glob } from 'bun';

export type Sparte = Awaited<ReturnType<typeof Sparte>>;
export async function Sparte(token: string) {
    const bot = createBot({
        token,
        intents: Discord.GatewayIntents.MessageContent | Discord.GatewayIntents.DirectMessages | Discord.GatewayIntents.GuildMessages,
        desiredProperties: {
            message: {
                guildId: true,
                channelId: true,
                member: true,
                id: true,
                content: true,
                mentions: true,
            },
            guild: {
                members: true
            },
            user: {
                id: true,
                globalName: true
            },
            member: {
                permissions: true,
            },
        },
        events: {
            ready({ user }) {
                console.log(user.globalName)
            },
            messageCreate(message) {
                console.log('e', message.mentionedUserIds)
                messageCreate(sparte, message);
            }
        }
    });

    
    const commands: Set<CommandStructure> = new Set();
    const glob = new Glob('*.{ts,tsx}');
    for await (const file of glob.scan({ cwd: `${import.meta.dir}/commands` })) {
        const i = await import(`${import.meta.dir}/commands/${file}`);
        const command = i.default as CommandStructure | Array<CommandStructure>;
        Array.isArray(command)
            ? command.forEach((command) => (commands.add(command)))
            : commands.add(command);
    }
    
    function getCommands(): Array<CommandStructure> {
        return Array.from(commands);
    }   

    const sparte = {
        ...bot,
        commands,
        getCommands,
    };

    return sparte;
}