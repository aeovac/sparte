import * as Discord from 'lilybird';
import { load } from 'dotenv-extended';
import { Handler } from '@lilybird/handlers/advanced';

load();
const token = Bun.env.TOKEN as string;
const handler = new Handler({});
export const $command = handler.storeCommand.bind(this);
export const $listener = handler.storeListener.bind(this);
await handler.scanDir(`${import.meta.dir}/commands/`);
await handler.scanDir(`${import.meta.dir}/listeners/`);
const bot = new Discord.Client({
    intents: Discord.Intents.GUILDS,
    listeners: handler.getListenersObject(),
    async setup (client) {
        await handler.loadGlobalCommands(client);
    }             
});
bot.login(token);

export type { Subscription };
interface Subscription {
    ID: string;
    duration: string;
}
