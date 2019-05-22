class Medusa {
  constructor(name, statues) {
  	this.name = name;
  	this.statues = [];
  }	
  stare(victim) {
  	victim.stoned = true;
  	this.statues.push(victim);
  	if (this.statues.length >3 ) {
  		return this.statues.shift();
  	}
  	//check array lenth for 3 victims 
  }
}


module.exports = Medusa;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass