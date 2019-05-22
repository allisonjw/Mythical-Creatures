class Werewolf {
  constructor(name, location) {
  	this.name = name;
  	this.location = location;
  	this.human = true;
  	this.wolf = false;
  	this.hungry = false;
  }	
  change() {
  	if (this.human === true){
  		this.human = false;
  		this.wolf = true;
  		this.hungry = true;
  	} else {
  		this.wolf = false;
  		this.human = true;
  		this.hungry = false;
  	}

  	// this.human = !this.human;
  	// this.wolf = !this.wolf;
  }
}


module.exports = Werewolf;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass