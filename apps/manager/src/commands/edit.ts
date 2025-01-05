import { $command } from './../index';
import type { Subscription } from './../index';
import { GUILD_ID } from '../config';


$command({
    type: 1,
    name: 'edit',
    description: 'Edit a sub',
    options: [{
        name: 'ID',
        type: 3,
        description: 'Test'
    }],
    handle(client, interaction) {
        let ID = interaction.data
            ?.options
            ?.find(({ type }) => (type == 3))
            ?.value as string | undefined;

        if(!ID) return;

        const subscription = bot.database
            .query('SELECT * FROM subscriptions WHERE userId = ? AND ID = ?;')
            .get(interaction.data.id, ID) as Subscription | undefined;

        const embed = () => ({
            description: `${
                subscription?.ID
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

        return await bot.helpers.sendMessage(interaction.channelId as Discord.BigString, {
            embeds: [embed()],
            components: [components()]
        })
    }
})