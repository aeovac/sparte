/*
antigroup on
antigroup off
antigroup message <off/on>
antigroup message <message>
antigroup silent <on/off>
antigroup whitelist/wl list
antigroup whitelist <user>
antigroup whitelist <add/remove> <user>
antigroup whitelist clear
antigroup whitelist file
*/


import { args_map, database } from "../shared";
import type { CommandStructure } from "../typings";

const antigroup_command = ({
    name: 'antigroup',
    description: '',
    aliases: [],
    callback(sparte, message, [state]) {
        const value = args_map[state as keyof typeof args_map];

        console.log(value)

        switch(value) {
            case 1:
                break;
            case 0:
                break;
        }
    }
}) as CommandStructure;


const antigroup_message_command = ({
    name: 'antigroup message',
    description: '',
    aliases: ['antigroup msg'],
    callback(sparte, message, [state, ...msg]) {
        const value = args_map[state as keyof typeof args_map];

        if(!value) {
            msg.join('')
            database.query('UPDATE antigroup SET message = ? WHERE userId = ?;').run(msg.join(), sparte.id);
        }

        switch(value) {
            case 1:
                break;
            case 0:
                break;
        }
    }
}) as CommandStructure;

const antigroup_silent_command = ({
    name: 'antigroup silent',
    description: '',
    aliases: [],
    callback(sparte, message, [state]) {
        const value = args_map[state as keyof typeof args_map];

        if(!value) {
            //SET message = ?;
        }

        switch(value) {
            case 1:
                break;
            case 0:
                break;
        }
    }
}) as CommandStructure;


export default [antigroup_command] as Array<CommandStructure>;