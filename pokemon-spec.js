import test from "ava"
import Pokemon from "./pokemon"

// #1 The `Pokemon` class should be defined.
test("Pokemon class is defined", t=>{
    const p = new Pokemon;
    t.true(p.constructor.name === "Pokemon");
});

// #2 A `Pokemon` object should be initialized with `.name`, `.attack`, `.defense`, `.health`, and `.type`. 
test("All 5 properties are set correctly", t=>{
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    t.is(charmander.name, "charmander");
    t.is(charmander.attack, 12);
    t.is(charmander.defense, 8);
    t.is(charmander.health, 30);
    t.is(charmander.type, "fire");
})

// #3 `takeDamage()` method, which takes a number as an argument and properly reduces the `.health` of the `Pokemon` by that number.
test("takeDamage()",t=>{
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    t.is(charmander.health, 30);
    charmander.takeDamage(5);
    t.is(charmander.health, 25);
    charmander.takeDamage(2000);
    t.is(charmander.health, 0);
})

// #4 