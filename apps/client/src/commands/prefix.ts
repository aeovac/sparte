import type { CommandStructure } from "../typings";

export default ({
    name: 'prefix',
    description: 'Set the prefix',
    aliases: [],
    callback(sparte, message, [prefix]) {
        //const config = getBasicConfig();
        return sparte.rest.editMessage(message.channelId, message.id, {
            content: prefix ? 
                    prefix !== '!' //config.prefix
                        ? (() => {
                            //Call the database
                            return 'Prefix changed';
                        })()
                        : `Your prefix is already ${prefix}`
                    : 'Put a correct prefix fils de pute'         
        }).then(
            () => (setTimeout(sparte.helpers.deleteMessage, 1000, message.channelId, message.id), ''),
            () => { /* catch */ }
        );
    }
}) as CommandStructure;