function Pokemon (name, attack, defense, health, type) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.health = health;
	this.initialthealth = health;
	this.type = type;
	
	this.takeDamage = function (damage){
		if (this.health < damage) {
			this.health = 0;
		}	
		else{ 
			this.health -= damage;
		}
	};
	
	this.attackOpponent =  function (pokemon){
	damage = this.attack - pokemon.defense;
	pokemon.takeDamage(damage);
	};
  
	this.display = function () {
	display = this.name.toUpperCase() + "(" +this.type.toUpperCase() + ")" + this.currenthealth+ "/" + this.health;
		return display;
	}
}	
