class Pirate {
  constructor(name, job, booty) {
  	this.name = name;
  	this.job = job || 'Scallywag';
  	this.cursed = false;
  	this.acts = 0;
  	this.booty = booty || 0;
  }
  commitHeinousAct() {
  	this.acts++;
  	if (this.acts >= 3) {
  		this.cursed = true;
  	}
  }
  robShip() {
  	this.booty = 100;
  	return 'YAARRR!';
  	}	
  }	



module.exports = Pirate;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass