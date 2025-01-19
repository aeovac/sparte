import type { CommandStructure } from "../typings";


export const copy_command = ({
    name: 'copy',
    description: '',
    aliases: [],
    async callback(sparte, message, args) {
        if(!message.guildId) return
        await sparte.helpers.getGuild(message.guildId).then(({ name, icon, roles, channels }) => {
            sparte.helpers.createGuild({ name }).then(async ({ id }) => {
                for (const role of roles) {
                    sparte.helpers.createRole(id, {
                        name: role?.[1].name,
                        //permissions: role?.[1].permissions
                    });
                    await new Promise((resolve) => (setTimeout(resolve, 200)))
                }

                await new Promise((resolve) => (setTimeout(resolve, 1200)));

                
            })
        });

        sparte.helpers.createGuild({
            name: ''
        })
    },
}) as CommandStructure;

export default [

] as Array<CommandStructure>;