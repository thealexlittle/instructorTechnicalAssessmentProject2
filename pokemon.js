function Pokemon (name, attack, defense, health, type) {
	//variable constructors 
	
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.health = health;
	this.initialhealth = health;
	this.type = type;

	/*takeDamage() method that takes in a damage value and 
	 subtracts it from the pokemon's health value. If the 
	 damage is greatter than the health of the pokemon, damage 
	 is set to 0 */
	this.takeDamage = function (damage){
		if (this.health < damage) {
			this.health = 0;
		}	
		else{ 
			this.health -= damage;
		}
	}
	
	/* attackOpponent() method  calculates the damage done to 
	the target pokemon and calls takeDamage() to apply that 
	damage to the pokemon*/
	this.attackOpponent =  function (pokemon){
		pokemon.takeDamage(this.attack - pokemon.defense);
	}
	
	/* Displays the name, type, and health of the pokemon */
	this.display = function () {
		return this.name.toUpperCase() + " (" +this.type.toUpperCase() + 
		") " + this.health + "/" + this.initialhealth;
	}
}	
