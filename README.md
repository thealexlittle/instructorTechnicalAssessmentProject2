# Project #2 - Define a JavaScript Class
**Define the `Pokemon` class using the given specifications in JavaScript(ES6)**

# `Pokemon` class specifications
1. The `Pokemon` class should be defined.
2. A `Pokemon` object should be initialized, or constructed, by passing in 5 arguments, which should correspond to the following 5 properties in order: `.name`, `.attack`, `.defense`, `.health`, and `.type`. 
   - For example: 
   ```javascript
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    console.log(charmander.name);    // charmander
    console.log(charmander.attack);  // 12
    console.log(charmander.defense); // 8
    console.log(charmander.health);  // 30
    console.log(charmander.type);    // fire
   ```
   - Data type validation is not needed here. You can assume the following `property`:type pairings will always be used: 
      * `.name`:string
      * `.attack`:number 
      * `.defense`:number
      * `.health`:number
      * `.type`:string
3. `Pokemon` objects should have a `takeDamage()` method, which takes a number as an argument and properly reduces the `.health` of the `Pokemon` by that number.
   - _Note: if the `.health` would go below 0, the `.health` should be set to 0 instead._
   - For example:
   ```javascript
    console.log(charmander.health);  // 30
    
    charmander.takeDamage(5);
    console.log(charmander.health);  // 25

    charmander.takeDamage(2000);
    console.log(charmander.health);  // 0
   ```
4. `Pokemon` objects should have an `attackOpponent()` method, which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method belonging to the opposing `Pokemon` and provide the appropriate damage as an argument. Damage is calculated simply: `DAMAGE = CURRENT_POKEMON_ATTACK - OPPONENT_POKEMON_DEFENSE`.
   - For example:
   ```javascript
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");

    console.log(charmander.attack);  // 12
    console.log(bulbasaur.defense);  // 9
    // 12 attack - 9 defense = 3 damage

    console.log(bulbasaur.health);  // 35
    charmander.attackOpponent(bulbasaur);   // charmander attacks bulbasaur
    console.log(bulbasaur.health);  // 32
   ```
   - By default, attacking a `Pokemon` should do __at the very least__ 1 damage. Consider what might happen if the `Pokemon` being attacked has a higher `.defense` than the `.attack` of the attacking `Pokemon`.
5. `Pokemon` objects should have a `display()` method, which takes no arguments and returns a string with the current pokemon's `.name` in all caps, `.type` in all caps and in parenthesis, and `.health` with a forward-slash, "/", followed by the `.health` the `Pokemon` was initialized with.
   - For example:
   ```javascript
    const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
    pikachu.display(); // "PIKACHU (ELECTRIC) 25/25"

    pikachu.health = 12;
    pikachu.display(); // "PIKACHU (ELECTRIC) 12/25"
   ```

The testing spec that will be used to score your code is provided within this repo. 
   - The ["test.pokemon.js"](https://github.com/AllStarCodeOrg/instructorTechnicalAssessmentProject2/blob/master/test.pokemon.js) and "testRunner.html" files work together for browser-based testing (using Mocha.js)
   - Create a "pokemon.js" file, which should contain your code to define the `Pokemon` class
   - Open the "testRunner.html" file in any browser - you should see your test results

A simplified testing spec has also been provided (["simplified-pokemon-spec.js"](https://github.com/AllStarCodeOrg/instructorTechnicalAssessmentProject2/blob/master/simplified-pokemon-spec.js)) - just copy and paste the code after your `Pokemon` class definition and run it in a JavaScript environment.  

Your submitted code will be run through the testing spec AS IS. Therefore, you are HIGHLY encouraged to make sure your code works before submitting it.
---
__Make sure to remove any testing related code before you submit!__  

---
# Rubric
### CLASS DEFINITION
ONLY the class is defined. There is no additional code, such as console.logs or extraneous variables defined outside of the class in the global space (comments are OK, even encouraged 😉!).
### TEST SPEC
Partial credit is given, since each test is broken down into smaller tests.  
Compounded errors are taken into consideration. For example, if a method fails to properly return the correct number, any other test using that method would normally fail, too. However, as long as the rest of the code is in order, the error will only be counted once.  
Passing all tests for a perfect score is NOT required to continue in the interview process.  
### CODE SYNTAX & STYLE
ES6 JavaScript should be used when applicable - specifically, in defining the class along with its properties and methods; and variables are defined using `const` or `let`.  

Additionally, although optimum code efficiency is not required, novice programming quirks may count against code style.  

Some common quirks include: 
- Making a condition statement with a boolean instead of using the boolean itself
     - For example: ```if(x===true){...}``` instead of ```if(x){...}```
- Not indenting code blocks 
- Forgetting to return a value in a function or method
