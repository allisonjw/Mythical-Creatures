class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }
  shoot () {
    this.checkCranky();
    if (this.cranky === true) {
      return 'NO!';
    }else{
    return 'Twang!!!';
  }
}
  run () {
    this.checkCranky();
    if (this.cranky === true) {
      return 'NO!';
    }else{
    return 'Clop clop clop clop!!!';
  }
}
  checkCranky () {
    this.counter++
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    }
  }
  sleep () {
    if(this.standing === true) {
      return 'NO!';
    }else{
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
    }
  }
  layDown () {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  standUp () {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = !this.cranky;
    }else{
      return 'Not while I\'m laying down!';
    }
  }
}



module.exports = Centaur;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass