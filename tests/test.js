import {Pokemon, Attack, Type} from "../pokemon";
import {attackFirst, fightTurn} from "../index";


/**
 * Initialization
 */
const magicrap = new Pokemon({
    name: "Magicrap",
    type: new Type("Eau"),
    level: 10,
    attacks: [
        new Attack("Trempette", "Eau", 0),
    ],
    speed: 5,
    hp: 20,
});

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

const carapouce = new Pokemon({
    name: "Carapouce",
    type: new Type("Eau"),
    level: 15,
    attacks: [
        new Attack("Charge", "Normal", 5),
        new Attack("Surf", "Eau", 10),
        new Attack("Force", "Combat", 10),
    ],
    mood: "Determined",
    speed: 15,
    hp: 40,
});


/**
 * Tests
 */
describe("Check Magicrap's name", () => {
    it("should be \"Magicrap\"", function() {
        expect(magicrap.name).toBe("Magicrap");
    });
});

describe("Check who attacks first with different speed stats", () => {
    it("should be Salamoche", function() {
        expect(attackFirst(magicrap, salamoche)).toBe(salamoche);
    });
});

describe("Check who attacks first with same speed stats, one with sleepy mood", () => {
    it("should be Salamoche", function() {
        expect(attackFirst(salamoche, boulbizarre)).toBe(salamoche);
    });
});

describe("Check who attacks first with same speed stats, none with sleepy mood", () => {
    const randomMock = Math.floor(Math.random() * 2);
    if (randomMock === 0)
    {
        describe("When Salamoche is chosen", () => {
            it("should be Salamoche", function() {
                expect(attackFirst(salamoche, carapouce, randomMock)).toBe(salamoche);
            });
        });
    }
    else
    {
        describe("When Carapouce is chosen", () => {
            it("should be Carapouce", function() {
                expect(attackFirst(salamoche, carapouce, randomMock)).toBe(carapouce);
            });
        });
    }
});

describe("Check the type of Boulbizarre", () => {
    it("should be \"Plante\"", function() {
        expect(boulbizarre.type.name).toBe("Plante");
    });
});

describe("Check the number of attacks available on Magicrap", () => {
    it("should be 1", function() {
        expect(magicrap.attacks.length).toBe(1);
    });
});

describe("Check the first attack of Magicrap", () => {
    it("should be \"Trempette\"", function() {
        expect(magicrap.attacks[0].name).toBe("Trempette");
    });
});

describe("Check Boulbizarre's HP", () => {
    it("should be 35", function() {
        expect(boulbizarre.hp).toBe(30);
    });
});

describe("Check Carapouce's HP after Salamoche uses \"Force\" on him", () => {
    const randomMockAttack = 2;
    fightTurn(salamoche, carapouce, 0, randomMockAttack);
    it("should be 30", function() {
        expect(carapouce.hp).toBe(30);
    });
});

describe("Check Salamoche's HP after the fight turn", () => {
    it("Should be less than 35", function() {
        expect(salamoche.hp).toBeLessThan(35);
    });
});