import * as Discord from 'discordeno';
import { createBot } from 'discordeno';
import Database from 'bun:sqlite';
import { commands } from './commands';

import { Sparte } from '../../client/src/sparte';

const database = new Database('./datas.db');
const spartes = new Set<typeof Sparte>();

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

bot.events.interactionCreate = async (interaction) => {      
    if(interaction.type == 2) {
        switch(interaction.data?.name) {
            case 'edit':
                let ID = interaction.data
                    ?.options
                    ?.find(({ type }) => (type === 3))
                    ?.value ?? '1';

                const subscription = database
                    .query('SELECT * FROM subscriptions WHERE userId = ?;')
                    .all(interaction.user.id as bigint) as Subscription[] | undefined;

                console.log(subscription)

                const embed = () => ({
                    description: `${
                        subscription?.[0].ID
                    }`
                }) as Discord.DiscordEmbed;

                const components = () => ({
                    type: 1,
                    components: [{
                        type: 3,
                        customId: `edit:${interaction.user.id}:${ID}`,
                        options: [{
                            label: 'Stop',
                            value: 'stop'
                        }]
                    }]
                }) as Discord.ActionRow;

                await bot.helpers.sendMessage(interaction.channelId as Discord.BigString, {
                    embeds: [embed()],
                    components: [components()]
                });
                break;
            case 'create':
                database.query('INSERT INTO subscriptions (userId) VALUES (?)').run(interaction.user.id);
                break;
        }
    } else if(interaction.type == 3) {
        if(interaction.data?.componentType == 3) {
            const customID = interaction.data?.customId;
            const [def] = interaction.data?.values! as Array<'token'>;
            if(customID?.startsWith('edit')) {
                const [_, userId, ID] = customID.split(':');
                switch(def) {
                    case 'token':
                        const new_value = "";
                    //query.run(new_value, userId, ID);
                }
            }
        }
    }

}

bot.start();

export type { Subscription };
interface Subscription {
    ID: string;
    duration: string;
}
