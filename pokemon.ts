

export interface IPokemon
{
    name: string;
    level: number;
    type: Type;
    attacks: Attack[];
    speed: number;
    hp: number;
    mood?: string;
}


export class Pokemon implements IPokemon
{
    name: string;
    level: number;
    type: Type;
    attacks: Attack[];
    speed: number;
    hp: number;
    mood?: string;

    constructor(props: IPokemon)
    {
        this.name = props.name;
        this.level = props.level;
        this.type = props.type;
        this.attacks = props.attacks;
        this.speed = props.speed;
        this.hp = props.hp;
        this.mood = props.mood !== undefined ? props.mood : "Bored";
    }

    toString(): string
    {
        const attacks: string = this.attacks.map(function(elem) {
            return " " + elem;
        }).toString();

        return `Name: ${this.name}
        Level: ${this.level}
        Type: ${this.type}
        Attacks:${attacks}
        Speed: ${this.speed}
        HP: ${this.hp}
        Mood: ${this.mood}\n`;
    }
}


// Attacks and types should have been stored in a json to simplify
// their use when creating a new Pokemon
export class Attack
{
    name: string;
    type: string;
    damage: number;

    constructor(name: string, type: string, damage: number)
    {
        this.name = name;
        this.type = type;
        this.damage = damage;
    }
}


export class Type
{
    name: string;

    constructor(name: string)
    {
        this.name = name;
    }
}