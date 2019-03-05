function Pokemon (name, attack, defense, health, type) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.health = health;
	this.initialhealth = health;
	this.type = type;
	this.dam = 0;
	this.takeDamage = function (damage){
		if (this.health < damage) {
			this.health = 0;
		}	
		else{ 
			this.health -= damage;
		}
	};
	
	this.attackOpponent =  function (pokemon){
	this.dam = this.attack - pokemon.defense;
	pokemon.takeDamage(this.dam);
	};
  
	this.display = function () {
		return this.name.toUpperCase() + " (" +this.type.toUpperCase() + ") " + this.health + "/" + this.initialhealth;
	}
}	
