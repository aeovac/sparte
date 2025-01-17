import { password } from "bun";
import { Sparte } from "./apps/client/src/sparte";
import { randomUUID } from "crypto";


const sparte = await Sparte('MTMyNDQ4MzQ5NzMxMzgyODg3NQ.GoHdSU.t6Onw87uBptgdfXww5J5K6gFJeVFEvSvFbItF4');
sparte.start();
console.log(sparte.getCommands());

