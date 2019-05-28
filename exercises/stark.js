class Stark {
  constructor(name, location) {
    this.name = name;
    this.location = location || 'Winterfell';
    this.safe = false;
  };

  houseWords() {
    if (this.safe === false) {
    return 'Winter is Coming';
    }else{
      return 'The North Remembers'
    }
  }
}

module.exports = Stark;
// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass