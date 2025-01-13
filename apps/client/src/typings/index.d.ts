import * as Discord from '@sparte/discordeno'
import { types } from '../shared';
import type { Sparte } from "../sparte";

export type Message = Sparte['transformers']['$inferredTypes']['message'];

interface CommandStructure {
    name: string;
    description: string;
    aliases: Array<string>;
    callback(sparte: Sparte, message: Message, args: string[]): unknown;
}