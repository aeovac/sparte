import { command } from "../shared";

command({
    name: 'custom',
    description: '',
    async callback(bot, message, args) {

        // Nous pouvouns utiliser la database de cette manière :
        // Afin de limiter l'utilisation de la mémoire (open() => close())

        // Qu'en penses-tu? Nous n'avons pas besoin de traiter des actions séquentielles
        
        // (Je recreereai la classe plus tard) 

        const _database = database.open();
        _database.query(...).run(user.id);
        _database.close();
    }
});