///////////////////////////////
// DEFINE POKEMON CLASS HERE //
///////////////////////////////



////////////////////////
// EXAMPLE TEST CASES //
////////////////////////

// #1 - Pokemon is defined
console.assert(Pokemon);

// #2 - `Pokemon` object initialized with `.name`, `.attack`, `.defense`, `.health`, and `.type`
const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
console.assert(charmander.name === "charmander", ".name property not correctly defined");
console.assert(charmander.attack === 12, ".attack property not correctly defined");
console.assert(charmander.defense === 8, ".defense property not correctly defined");
console.assert(charmander.health === 30, ".health property not correctly defined");
console.assert(charmander.type === "fire", ".type property not correctly defined");

// #3 `takeDamage()` method, which takes a number as an argument and properly reduces the `.health` of the `Pokemon` by that number
charmander.takeDamage(5);
console.assert(charmander.health === 25,".takeDamage() method not correctly calculating damage");
charmander.takeDamage(2000);
console.assert(charmander.health === 0,".takeDamage() method not correctly calculating damage");

// #4 `attackOpponent()` method, which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method on the opponent `Pokemon`.
const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
charmander.attackOpponent(bulbasaur);
console.assert(bulbasaur.health === 32, ".attackOpponent() method not correctly damaging opponent");
bulbasaur.takeDamage = function(){this.called = true}; // stubbing .takeDamage() method;
charmander.attackOpponent(bulbasaur);
console.assert(bulbasaur.called, ".attackOpponent() method not properly calling the opponent's .takeDamage() method");

// #5 `display()` method, which takes no arguments and returns a string in the format "POKEMON_NAME (POKEMON_TYPE) CURRENT_POKEMON_HEALTH/ORIGINAL_POKEMON_HEALTH"
const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
console.assert(pikachu.display() === "PIKACHU (ELECTRIC) 25/25", ".display() not correctly returning properly formatted string");
pikachu.health = 12;
console.assert(pikachu.display() === "PIKACHU (ELECTRIC) 12/25", ".display() not correctly returning properly formatted string");

console.log("If this is all you're seeing, you've passed all of the example test cases!");
