import { command } from "../shared";

command({
    name: 'prefix',
    description: 'Set the prefix',
    callback(sparte, message, [prefix]) {
        return sparte.rest.editMessage(message.channelId, message.id, {
            content: prefix ? 
                    prefix !== config.prefix
                        ? (() => {
                            //Call the database
                            return 'Prefix changed';
                        })()
                        : `Your prefix is already ${prefix}`
                    : 'Put a correct prefix fils de pute'         
        }).then(
            ({ channelId, id }) => (setTimeout(sparte.helpers.deleteMessage, 1000, BigInt(channelId), BigInt(id), '')),
            () => { /* catch */ }
        );
    }
});