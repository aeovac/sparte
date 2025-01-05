import * as Discord from '@sparte/discordeno'
import { types } from '../shared';
import type { Sparte } from "../sparte";

namespace Command {
    interface Structure<C extends Discord.Bot = Discord.Bot> {
        name: string;
        description: string;
        callback(sparte: Sparte, message: typeof types.message, args: string[]): unknown;
    }

    interface Raw {
        
    }
};