class Human {
  constructor(name) {
  	this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre() {
    if (this.encounterCounter %3===0 && this.encounterCounter > 0) {
    return true;
    }else{
      return false;
    }
  }
}


module.exports = Human;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass