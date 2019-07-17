class Ogre {
	constructor (name, home = "Swamp") {
		this.name = name;
		this.home = home;
		this.swings = 0;
	}
    encounter(human) {
    	human.encounterCounter++;
    }
    swingAt(human) {
    	this.swings++;
    }
}

module.exports = Ogre;