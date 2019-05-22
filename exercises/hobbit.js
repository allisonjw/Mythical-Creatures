class Hobbit {
	constructor(name, disposition, age) {
	this.name = name;
	this.disposition = disposition || 'homebody';
	this.age = age || 0; //if an age is passed an argument, else if undefined it will be 0//
	this.adult = true;
	this.isShort = true;
	this.old = false;
	this.hasRing = false;
	if (this.name === 'Frodo')
		return this.hasRing = true;
	}	
	celebrateBirthday() {
		this.age++;
		if (this.age === 101) {
			return this.old = true
		} else if (this.age <= 32) {
			return this.adult = false
		} else if (this.age >= 32) {
			return this.adult = true					 
		}
	}
}

module.exports = Hobbit;





























// class Hobbit {
// 	constructor(name, disposition, age) {
// 	this.name = name;
// 	this.disposition = disposition || 'homebody';
// 	this.age = age || 0;
// 	this.adult = true;
// 	this.isShort = true;
// 	this.old = false;
// 	this.hasRing = false;
// 	if (this.name === 'Frodo') {
// 		return this.hasRing = true;
// 	}
// 	}
// 	celebrateBirthday() {
// 		this.age++;
// 		if (this.age === 101) {
// 			return this.old = true
// 		} else if (this.age <= 32) {
// 			return this.adult = false
// 		} else if (this.age >= 33) {
// 			return this.adult = true
// 		} 
// 	}	
// }


// module.exports = Hobbit;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass