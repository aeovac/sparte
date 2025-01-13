import * as Discord from 'discordeno';
import { createBot } from 'discordeno';
import Database from 'bun:sqlite';
import { commands } from './commands';

import { Sparte } from '../../client/src/sparte';

export const database = new Database('./datas.db');
export const spartes = new Set<typeof Sparte>();

database.query(`
    CREATE TABLE IF NOT EXISTS subscriptions (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        userId BIGINT NOT NULL
    );
`).run();

const bot = createBot({
    token: 'MTI3NDQ4MjU5NTI0NTMzMDQ2Mg.GyMYAf.m4fIo6WznGQv2CG_vdCREtszdl_sJ0USHd-exE',
    intents: Discord.Intents.Guilds,
    desiredProperties: {
        interaction: {
            type: true,
            token: true,
            id: true,
            guildId: true,
            channelId: true,
            user: true,
            data: true
        },
        user: {
            id: true
        }
    },
    events: {
        async ready() {
            const p = [];
            for (const command of commands) {
                if('guild_id' in command) {
                    p.push(
                        bot.rest.createGuildApplicationCommand(
                            command, 
                            bot.transformers.snowflake(command.guild_id!)
                        )
                    );
                    continue;
                } 

                p.push(
                    bot.rest.createGlobalApplicationCommand(command)
                );
            }

            await Promise.allSettled(p);
        }
    }         
});


bot.start();

export type { Subscription };
interface Subscription {
    ID: string;
    duration: string;
}
