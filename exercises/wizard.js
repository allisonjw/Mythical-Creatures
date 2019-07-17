class Wizard {
	constructor(wizardObj) {
		this.name = wizardObj.name;
		this.bearded = true;
		this.isRested = true;
		this.spells = 0;
		if (wizardObj.bearded === false) {
			this.bearded = false;
		}
	}
	incantation(spell) {
		 return spell.toUpperCase();
	}
	cast() {
		this.spells++;
		  if (this.spells >= 3) {
		this.isRested = false;
		 return "I SHALL NOT CAST!";
		} else
		 return 'MAGIC BULLET';
	}	
}

module.exports = Wizard;