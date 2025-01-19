import { password } from "bun";
import type { CommandStructure } from "../typings";

const guild_icon_command = ({
    name: 'guild icon',
    description: '',
    aliases: [],
    async callback(sparte, message, args) {
        
    }
}) as CommandStructure;

const password_command = ({
    name: 'password',
    description: 'Generate a password',
    aliases: [],
    async callback(sparte, message, args) {
        
    }
}) as CommandStructure;
 
const encode_command = ({
    name: 'encode',
    description: '',
    aliases: [],
    async callback(sparte, message, args) {

    }
}) as CommandStructure;


export default [
    encode_command
] as Array<CommandStructure>;