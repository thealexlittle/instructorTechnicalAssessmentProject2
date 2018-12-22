import test from "ava"
import sinon from "sinon"
import Pokemon from "./pokemon"

function randNum(num){
    num = num || 8;
    return Math.floor(Math.random()*num);
}

function randStr(){
    let o;
    let l = randNum()+2;
    for( o = "" ; o.length < l ; o += String.fromCharCode( randNum(25) + 97 ) );
    return o;
}

function randPokemonData(){
    return [
        randStr(),
        randNum()+1,
        randNum()+1,
        randNum()+1,
        randStr()
    ];
}

// #1 The `Pokemon` class should be defined.
test("Pokemon class is defined", t=>{
    const p = new Pokemon;
    t.true(p.constructor.name === "Pokemon");
});

// #2 A `Pokemon` object should be initialized with `.name`, `.attack`, `.defense`, `.health`, and `.type`. 
test("All 5 properties are set correctly", t=>{
    // Example test
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    t.is(charmander.name, "charmander");
    t.is(charmander.attack, 12);
    t.is(charmander.defense, 8);
    t.is(charmander.health, 30);
    t.is(charmander.type, "fire");

    // Random tests
    const count = 100;
    for(let i = 0; i < count; i++){
        const pokemonData = randPokemonData();
        const pokemon = new Pokemon(...pokemonData);
        t.is(pokemon.name, pokemonData[0]);
        t.is(pokemon.attack, pokemonData[1]);
        t.is(pokemon.defense, pokemonData[2]);
        t.is(pokemon.health, pokemonData[3]);
        t.is(pokemon.type, pokemonData[4]);
    }
})

// #3 `takeDamage()` method, which takes a number as an argument and properly reduces the `.health` of the `Pokemon` by that number.
test("takeDamage()",t=>{
    // Example test
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    t.is(charmander.health, 30);
    charmander.takeDamage(5);
    t.is(charmander.health, 25);
    charmander.takeDamage(2000);
    t.is(charmander.health, 0);

    // Random tests
    const count = 100;
    for(let i = 0; i < count; i++){
        const pokemonData = randPokemonData();
        const pokemon = new Pokemon(...pokemonData);
        const health = pokemonData[3];
        t.is(pokemon.health, health);
        const damage = randNum(health-1) || 1;
        pokemon.takeDamage(damage);
        const newHealth = health - damage < 0 ? 0 : health - damage;
        t.is(pokemon.health, newHealth);
    }
})

// #4 `attackOpponent()` method, which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method on the opponent `Pokemon`
test("attackOpponent()",t=>{
    // Example tests
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
    
    charmander.attackOpponent(bulbasaur);
    t.is(bulbasaur.health, 32);
    // Random tests
    const count = 100;
    for(let i = 0; i < count; i++){
        const pokemon1Data = randPokemonData();
        const pokemon1 = new Pokemon(...pokemon1Data);
        
        const pokemon2Data = randPokemonData();
        const pokemon2 = new Pokemon(...pokemon2Data);

        const pokemon2Health  = pokemon2Data[3];
        const pokemon2Defense = pokemon2Data[2];
        const pokemon1Attack  = pokemon1Data[1];
        const diff = pokemon1Attack - pokemon2Defense;
        const damage = diff < 1 ? 1 : diff;
        pokemon1.attackOpponent(pokemon2);
        t.is(pokemon2.health, damage > pokemon2Health ? 0 : pokemon2Health - damage);

        // opponent's `.takeDamage()` is called
        pokemon2.takeDamage = sinon.spy();
        pokemon1.attackOpponent(pokemon2);
        t.true(pokemon2.takeDamage.called);
    }
});

// #5 `display()` method, which takes no arguments and returns a string in the format "POKEMON_NAME (POKEMON_TYPE) CURRENT_POKEMON_HEALTH/ORIGINAL_POKEMON_HEALTH"
test("display()",t=>{
    // Example tests
    const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
    t.is(pikachu.display(), "PIKACHU (ELECTRIC) 25/25");
    pikachu.health = 12;
    t.is(pikachu.display(), "PIKACHU (ELECTRIC) 12/25");

    // Random tests
    const count = 100;
    for(let i = 0; i < count; i++){
        const pokemonData = randPokemonData();
        const pokemon = new Pokemon(...pokemonData);
        const originalHealth = pokemonData[3];
        let display = `${pokemon.name.toUpperCase()} (${pokemon.type.toUpperCase()}) ${originalHealth}/${originalHealth}`;
        t.is(pokemon.display(), display);
        const newHealth = randNum();
        pokemon.health = newHealth;
        display = `${pokemon.name.toUpperCase()} (${pokemon.type.toUpperCase()}) ${newHealth}/${originalHealth}`;
        t.is(pokemon.display(), display);
    }
});