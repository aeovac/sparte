import type { CommandStructure } from "../typings";

const textchannel_command = ({
    name: 'textchannel',
    description: '',
    aliases: [],
    callback(sparte, message, args) {
        if(message.guildId) {
            sparte.rest.createChannel(message.guildId, {
                name: args.join(' ')
            });
            return;
        }

        //Edit
    }
}) as CommandStructure;

const kick_command = ({
    name: 'kick',
    description: '',
    aliases: [],
    async callback(sparte, message, args) {
        if(
            !message.guildId || 
            !message.member?.permissions?.has('ADMINISTRATOR') || 
            !message.member?.permissions?.has('KICK_MEMBERS')
        ) {
            return;
        }

        const users = message.mentionedUserIds;
        const reason = args.slice(users.length).join(' ');

        for await (const user of users) {
            sparte.rest.kickMember(message.guildId, user, reason);
            await new Promise((resolve) => (setTimeout(resolve, 1000)));
        }
    }
}) as CommandStructure;

const tempmute_command = ({
    name: 'tempmute',
    description: '',
    aliases: [],
    async callback(sparte, message, args) {
        if(!message.guildId) {
            return;
        }

        const users = message.mentionedUserIds;
        const duration = args.slice(users.length);

        for await (const user of users) {
            sparte.rest.editMember(message.guildId, user, {
                communicationDisabledUntil: ''
            }) 
        }
        //Edit
    }
}) as CommandStructure;



export default [
    textchannel_command,
    kick_command
] as Array<CommandStructure>;