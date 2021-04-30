import {Attack, Pokemon, Type} from "./pokemon";
import {fight} from "./fight";


const salamoche = new Pokemon({
    name: "Salamoche",
    type: new Type("Feu"),
    level: 15,
    attacks: [
        new Attack("Bélier", "Normal", 10),
        new Attack("Lance-Flammes", "Feu", 15),
        new Attack("Force", "Combat", 10),
        new Attack("Mimi-Queue", "Normal", 0),
    ],
    mood: "Angry",
    speed: 15,
    hp: 35,
});

const boulbizarre = new Pokemon({
    name: "Boulbizarre",
    type: new Type("Plante"),
    level: 18,
    attacks: [
        new Attack("Charge", "Normal", 5),
        new Attack("Mimi-Queue", "Normal", 0),
        new Attack("Coupe", "Normal", 5),
        new Attack("Vampigraine", "Plante", 10),
    ],
    mood: "Sleepy",
    speed: 10,
    hp: 30,
});


fight(salamoche, boulbizarre);