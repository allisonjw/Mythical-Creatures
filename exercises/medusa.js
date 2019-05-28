class Medusa {
  constructor(name, statues) {
  	this.name = name;
  	this.statues = [];
  }	
  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
  	}
  	//check array lenth for 3 victims 
  }
}


module.exports = Medusa;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass