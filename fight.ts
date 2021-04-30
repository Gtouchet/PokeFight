import {Attack, IPokemon} from "./pokemon";


export async function fight(pokemonA: IPokemon, pokemonB: IPokemon)
{
    await delay(1000);
    console.log(`Que le combat entre ${pokemonA.name} et ${pokemonB.name} COMMENCE !`);
    let turn = 0;
    while (pokemonA.hp > 0 && pokemonB.hp > 0)
    {
        await delay(2000);
        turn += 1;
        console.log(`+--------------------------------+`);
        console.log(`Début du tour: ${turn}\n`);

        await fightTurn(pokemonA, pokemonB);

        await delay(2000);
        displayHp(pokemonA);
        displayHp(pokemonB);
        console.log(`\nFin du tour: ${turn}`);
    }

    const winner = pokemonA.hp > 0 ? pokemonA : pokemonB;
    const loser = pokemonB.hp > 0 ? pokemonA : pokemonB;
    console.log(`${loser.name} est KO ! ${winner.name} est vainqueur !\n`)
}


function displayHp(pokemon: IPokemon)
{
    process.stdout.write(`HP ${pokemon.name}: ${pokemon.hp} `);
    for (let i = 0; i < pokemon.hp; i += 1)
    {
        process.stdout.write(`|`);
    }
    console.log();
}


export function attackFirst(pokemonA: IPokemon,
                            pokemonB: IPokemon,
                            randomMock: number = Math.floor(Math.random() * 2))
{
    // Depending on speed
    if (pokemonA.speed !== pokemonB.speed)
    {
        return pokemonA.speed >= pokemonB.speed ? pokemonA : pokemonB;
    }
    // Depending on mood
    else
    {
        if (pokemonA.mood === "Sleepy")
        {
            return pokemonB;
        }
        else if (pokemonB.mood === "Sleepy")
        {
            return pokemonA;
        }

        // Randomized
        return randomMock === 0 ? pokemonA : pokemonB;
    }
}


export async function fightTurn(pokemonA: IPokemon,
                          pokemonB: IPokemon,
                          randomMockTurn: number = Math.floor(Math.random() * 2),
                          randomMockAttack: number = Math.floor(Math.random() * 4))
{
    if (randomMockAttack > pokemonA.attacks.length - 1)
    {
        randomMockAttack = pokemonA.attacks.length - 1;
    }
    if (randomMockAttack > pokemonB.attacks.length - 1)
    {
        randomMockAttack = pokemonB.attacks.length - 1;
    }

    const attackA = pokemonA.attacks[randomMockAttack];
    const attackB = pokemonB.attacks[randomMockAttack];

    if (attackFirst(pokemonA, pokemonB, randomMockTurn) === pokemonA)
    {
        await delay(1000);
        console.log(`${pokemonA.name} attaque ${pokemonB.name} avec son attaque ${attackA.name} pour ${attackA.damage} de dégats !`);
        pokemonB.hp -= attackA.damage;
        await delay(1000);
        if (pokemonB.hp > 0)
        {
            console.log(`${pokemonB.name} riposte avec son attaque ${attackB.name} pour ${attackB.damage} de dégats !`);
            pokemonA.hp -= attackB.damage;
        }
        else
        {
            pokemonB.hp = 0;
        }
    }
    else
    {
        await delay(1000);
        console.log(`${pokemonB.name} attaque ${pokemonA.name} avec son attaque ${attackB.name} pour ${attackB.damage} de dégats !`);
        pokemonA.hp -= attackB.damage;
        await delay(1000);
        if (pokemonA.hp > 0)
        {
            console.log(`${pokemonA.name} riposte avec son attaque ${attackA.name} pour ${attackA.damage} de dégats !`);
            pokemonB.hp -= attackA.damage;
        }
        else
        {
            pokemonA.hp = 0;
        }
    }
}

function delay(delay: number): Promise<void>
{
    return new Promise(resolve => setTimeout(resolve, delay));
}