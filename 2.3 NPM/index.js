// var generateName = require('sillyname');
// var sillyName = generateName();

import generateName from "sillyName";
import superheroes from "superheroes";

const sillyName = generateName();
const superHero = superheroes.random();





console.log(`My name is ${sillyName} and my superhero name is ${superHero}!`);
