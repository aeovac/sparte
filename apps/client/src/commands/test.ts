import { command } from "../shared";

command({
    name: 'custom',
    description: '',
    async callback(bot, message, args) {
        bot.helpers.editMessage(message.channelId, message.id, { content: 'Hello World!' });
    }
});