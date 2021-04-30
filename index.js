"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var fight_1 = require("./fight");
var salamoche = new pokemon_1.Pokemon({
    name: "Salamoche",
    type: new pokemon_1.Type("Feu"),
    level: 15,
    attacks: [
        new pokemon_1.Attack("Bélier", "Normal", 10),
        new pokemon_1.Attack("Lance-Flammes", "Feu", 15),
        new pokemon_1.Attack("Force", "Combat", 10),
        new pokemon_1.Attack("Mimi-Queue", "Normal", 0),
    ],
    mood: "Angry",
    speed: 15,
    hp: 35,
});
var boulbizarre = new pokemon_1.Pokemon({
    name: "Boulbizarre",
    type: new pokemon_1.Type("Plante"),
    level: 18,
    attacks: [
        new pokemon_1.Attack("Charge", "Normal", 5),
        new pokemon_1.Attack("Mimi-Queue", "Normal", 0),
        new pokemon_1.Attack("Coupe", "Normal", 5),
        new pokemon_1.Attack("Vampigraine", "Plante", 10),
    ],
    mood: "Sleepy",
    speed: 10,
    hp: 30,
});
fight_1.fight(salamoche, boulbizarre);
