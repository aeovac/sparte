import { $listener } from '../index';

$listener({
    event: 'interactionCreate',
    handle(client, interaction) {
        if(interaction.type == 3) {
            if(interaction.data?.component_type == 3) {
                const customID = interaction.data?.custom_id;
                const [def] = interaction.data?.values! as Array<'token'>;
                if(customID?.startsWith('edit')) {
                    const [_, userId, ID] = customID.split(':');
                    //const query = bot.database.query(`UPDATE subscriptions SET ${def} = ? WHERE userId = ? AND ID = ?;`);
                    switch(def) {
                        case 'token':
                            const new_value = "";
                            //query.run(new_value, userId, ID);
                    }
                }
            }
        }
    }
});