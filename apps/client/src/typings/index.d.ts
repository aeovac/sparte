import * as Discord from '@sparte/discordeno'
import { types } from '../shared';
import type { Sparte } from "../sparte";

export type Message = Sparte['transformers']['$inferredTypes']['message'];
export type Message = Sparte['transformers']['$inferredTypes']['message'];
export type Message = Sparte['transformers']['$inferredTypes']['message'];

interface CommandStructure<C extends Discord.Bot = Discord.Bot> {
    name: string;
    description: string;
    callback(sparte: Sparte, message: Message, args: string[]): unknown;
}