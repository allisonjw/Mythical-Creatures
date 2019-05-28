class Direwolf{
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;

  };

  protect(stark) {
    if (this.starksToProtect.length >= 2) {
      return;
    }
    if (stark.location === this.home) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    };
  };

  leave(stark) {
    stark.safe = false;
    this.starksToProtect = [];
  }
}

module.exports = Direwolf;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass