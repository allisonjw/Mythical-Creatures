class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.counter = 0;
	}
	shoot() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
			return 'NO!';
		} else if (this.layingDown === true) {
			return 'NO!';
		} else {
			return 'Twang!!!';
		}
	}	
	run() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
		} else if (this.layingDown === true) {
			return 'NO!';
		} else {
		return 'Clop clop clop clop!!!';
	}
}	
	sleep() {
		if (this.standing === true) {
		return 'NO!';
		} else {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
	}
}
	layDown() {
		this.standing = !this.standing;
		this.layingDown = !this.layingDown;
	}
	standUp() {
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