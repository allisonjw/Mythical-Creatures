class Wizard {
	constructor (object) {
		this.name = object.name;
		this.bearded = object.bearded;
		this.bearded = this.bearded === undefined;
		this.isRested = true;
		this.spellCounter = 0;
	}
	incantation(spell) {
		return spell.toUpperCase ();
	}	
	cast() {
		this.spellCounter++;
		if (this.spellCounter >= 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST!';
		} else {
		return 'MAGIC BULLETT';
	}
}


module.exports = Wizard;