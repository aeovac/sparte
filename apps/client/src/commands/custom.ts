import { database, parseVars } from "../shared";
import type { CommandStructure } from "../typings";

const custom_command = ({
    name: 'custom create',
    description: 'Set the prefix',
    aliases: [],
    callback(sparte, message, [name]) {
        console.log(name)
        const cmd = sparte
            .getCommands()
            .find((command) => (
                command.name.startsWith(name) || command.aliases.find((aliase) => (
                    aliase.startsWith(name)
                ))
            ));

        if(!!cmd) {
            return console.log('Exists')
            return sparte.rest.editMessage(message.channelId, message.id, { content: '' }).then(() => {
                setTimeout(sparte.rest.deleteMessage, 4000);
            });
        }

        /*


        const response = parseVars(message.content);
        database
            .query('INSERT INTO cc (userId, name, response) VALUES (?, ?, ?);')
            .run(sparte.id, name, response);
            */
    }
}) as CommandStructure;

const custom_delete_command = ({
    name: 'custom delete',
    description: 'Set the prefix',
    aliases: ['delete custom', 'cc delete'],
    callback(sparte, message, [ID]) {
        try { 
            parseInt(ID);
        }  catch {
            return;
        };

        database
            .query('DELETE cc WHERE userId = ? AND ID = ?')
            .run(sparte.id, ID);
    }
}) as CommandStructure;


export default [custom_command,  custom_delete_command] as CommandStructure[];
