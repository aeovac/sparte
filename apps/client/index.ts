import { Sparte } from "./src/sparte";

// MTI3MTk0NDg2NjIwNDQ4MzY4OQ.G0foLo.Ij7oqAs1cJ-mFjwzwkhtwNlkkiEAvDGnyi5zSk
const sparte = await Sparte('MTI3MTk0NDg2NjIwNDQ4MzY4OQ.G0foLo.Ij7oqAs1cJ-mFjwzwkhtwNlkkiEAvDGnyi5zSk');
sparte.start();

console.log(sparte.getCommands())