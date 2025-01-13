import { Sparte } from "./apps/client/src/sparte";

const sparte = await Sparte('MTMyNDQ4MzQ5NzMxMzgyODg3NQ.GcnuFL.lLf7_8miwgHUDhkqyQuHAypXG6IyiVmg0zr3oY');
await sparte.start();
console.log(sparte.getCommands());