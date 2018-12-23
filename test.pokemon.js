const randTestsIterations = 100;
describe("Pokemon class",function(){ 
    // #1 The `Pokemon` class should be defined.
    it("should be defined",function(){
        chai.expect(Pokemon).to.not.be.undefined;;
    });

    // #2 A `Pokemon` object should be initialized with `.name`, `.attack`, `.defense`, `.health`, and `.type`. 
    it("should initialize all 5 properties properly",function(){
        const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
        chai.expect(charmander.name).to.equal("charmander");
        chai.expect(charmander.attack).to.equal(12);
        chai.expect(charmander.defense).to.equal(8);
        chai.expect(charmander.health).to.equal(30);
        chai.expect(charmander.type).to.equal("fire");
    });

    // #3 `takeDamage()` method, which takes a number as an argument and properly reduces the `.health` of the `Pokemon` by that number.
    describe("takeDamage()",function(){
        it("should properly reduces the `.health` of the `Pokemon` by given number",function(){
            const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
            chai.expect(charmander.health).to.equal(30);
            charmander.takeDamage(5);
            chai.expect(charmander.health).to.equal(25);
            charmander.takeDamage(2000);
            chai.expect(charmander.health).to.equal(0);
        })
    })

    // #4 `attackOpponent()` method, which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method on the opponent `Pokemon`
    describe(".attackOpponent()",function(){
        let charmander;
        let bulbasaur;
        
        before(function(){
            charmander = new Pokemon("charmander", 12, 8, 30, "fire");
            bulbasaur  = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
        });

        it("should properly damage the opponent",function(){
            charmander.attackOpponent(bulbasaur);
            chai.expect(bulbasaur.health, 32);
        });

        it("should call .takeDamage() on the given opponent `Pokemon`", function(){
            chai.spy.on(bulbasaur,"takeDamage");
            charmander.attackOpponent(bulbasaur);
            chai.expect(bulbasaur.takeDamage).to.have.been.called();
            chai.expect(bulbasaur.takeDamage).to.have.been.called.with(3);
        });
    })

    // #5 `display()` method, which takes no arguments and returns a string in the format "POKEMON_NAME (POKEMON_TYPE) CURRENT_POKEMON_HEALTH/ORIGINAL_POKEMON_HEALTH"
    describe(".display()", function(){
        it("should",function(){
            const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
            chai.expect(pikachu.display()).to.equal("PIKACHU (ELECTRIC) 25/25");
            pikachu.health = 12;
            chai.expect(pikachu.display()).to.equal("PIKACHU (ELECTRIC) 12/25");
        })
    })
})