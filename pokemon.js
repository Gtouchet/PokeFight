"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.Attack = exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
        this.name = props.name;
        this.level = props.level;
        this.type = props.type;
        this.attacks = props.attacks;
        this.speed = props.speed;
        this.hp = props.hp;
        this.mood = props.mood !== undefined ? props.mood : "Bored";
    }
    Pokemon.prototype.toString = function () {
        var attacks = this.attacks.map(function (elem) {
            return " " + elem;
        }).toString();
        return "Name: " + this.name + "\n        Level: " + this.level + "\n        Type: " + this.type + "\n        Attacks:" + attacks + "\n        Speed: " + this.speed + "\n        HP: " + this.hp + "\n        Mood: " + this.mood + "\n";
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
// Attacks and types should have been stored in a json to simplify
// their use when creating a new Pokemon
var Attack = /** @class */ (function () {
    function Attack(name, type, damage) {
        this.name = name;
        this.type = type;
        this.damage = damage;
    }
    return Attack;
}());
exports.Attack = Attack;
var Type = /** @class */ (function () {
    function Type(name) {
        this.name = name;
    }
    return Type;
}());
exports.Type = Type;
