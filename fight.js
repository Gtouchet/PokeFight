"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fightTurn = exports.attackFirst = exports.fight = void 0;
function fight(pokemonA, pokemonB) {
    return __awaiter(this, void 0, void 0, function () {
        var turn, winner, loser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    console.log("Que le combat entre " + pokemonA.name + " et " + pokemonB.name + " COMMENCE !");
                    turn = 0;
                    _a.label = 2;
                case 2:
                    if (!(pokemonA.hp > 0 && pokemonB.hp > 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, delay(2000)];
                case 3:
                    _a.sent();
                    turn += 1;
                    console.log("+--------------------------------+");
                    console.log("D\u00E9but du tour: " + turn + "\n");
                    return [4 /*yield*/, fightTurn(pokemonA, pokemonB)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, delay(2000)];
                case 5:
                    _a.sent();
                    displayHp(pokemonA);
                    displayHp(pokemonB);
                    console.log("\nFin du tour: " + turn);
                    return [3 /*break*/, 2];
                case 6:
                    winner = pokemonA.hp > 0 ? pokemonA : pokemonB;
                    loser = pokemonB.hp > 0 ? pokemonA : pokemonB;
                    console.log(loser.name + " est KO ! " + winner.name + " est vainqueur !\n");
                    return [2 /*return*/];
            }
        });
    });
}
exports.fight = fight;
function displayHp(pokemon) {
    process.stdout.write("HP " + pokemon.name + ": " + pokemon.hp + " ");
    for (var i = 0; i < pokemon.hp; i += 1) {
        process.stdout.write("|");
    }
    console.log();
}
function attackFirst(pokemonA, pokemonB, randomMock) {
    if (randomMock === void 0) { randomMock = Math.floor(Math.random() * 2); }
    // Depending on speed
    if (pokemonA.speed !== pokemonB.speed) {
        return pokemonA.speed >= pokemonB.speed ? pokemonA : pokemonB;
    }
    // Depending on mood
    else {
        if (pokemonA.mood === "Sleepy") {
            return pokemonB;
        }
        else if (pokemonB.mood === "Sleepy") {
            return pokemonA;
        }
        // Randomized
        return randomMock === 0 ? pokemonA : pokemonB;
    }
}
exports.attackFirst = attackFirst;
function fightTurn(pokemonA, pokemonB, randomMockTurn, randomMockAttack) {
    if (randomMockTurn === void 0) { randomMockTurn = Math.floor(Math.random() * 2); }
    if (randomMockAttack === void 0) { randomMockAttack = Math.floor(Math.random() * 4); }
    return __awaiter(this, void 0, void 0, function () {
        var attackA, attackB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (randomMockAttack > pokemonA.attacks.length - 1) {
                        randomMockAttack = pokemonA.attacks.length - 1;
                    }
                    if (randomMockAttack > pokemonB.attacks.length - 1) {
                        randomMockAttack = pokemonB.attacks.length - 1;
                    }
                    attackA = pokemonA.attacks[randomMockAttack];
                    attackB = pokemonB.attacks[randomMockAttack];
                    if (!(attackFirst(pokemonA, pokemonB, randomMockTurn) === pokemonA)) return [3 /*break*/, 3];
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    console.log(pokemonA.name + " attaque " + pokemonB.name + " avec son attaque " + attackA.name + " pour " + attackA.damage + " de d\u00E9gats !");
                    pokemonB.hp -= attackA.damage;
                    return [4 /*yield*/, delay(1000)];
                case 2:
                    _a.sent();
                    if (pokemonB.hp > 0) {
                        console.log(pokemonB.name + " riposte avec son attaque " + attackB.name + " pour " + attackB.damage + " de d\u00E9gats !");
                        pokemonA.hp -= attackB.damage;
                    }
                    else {
                        pokemonB.hp = 0;
                    }
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, delay(1000)];
                case 4:
                    _a.sent();
                    console.log(pokemonB.name + " attaque " + pokemonA.name + " avec son attaque " + attackB.name + " pour " + attackB.damage + " de d\u00E9gats !");
                    pokemonA.hp -= attackB.damage;
                    return [4 /*yield*/, delay(1000)];
                case 5:
                    _a.sent();
                    if (pokemonA.hp > 0) {
                        console.log(pokemonA.name + " riposte avec son attaque " + attackA.name + " pour " + attackA.damage + " de d\u00E9gats !");
                        pokemonB.hp -= attackA.damage;
                    }
                    else {
                        pokemonA.hp = 0;
                    }
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.fightTurn = fightTurn;
function delay(delay) {
    return new Promise(function (resolve) { return setTimeout(resolve, delay); });
}
