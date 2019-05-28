class Sphinx {
  constructor() {
  	this.riddles = [];
}



module.exports = Sphinx;















// ------REVIEWED IN CLASS--------
// class Sphinx {
//   constructor() {
//   	this.riddles = [];
//   }

//   collectRiddle(obj) {
//   	this.riddles.push(obj);
//   	if(this.riddles.length >= 4) {
//   		this.riddles.shift();
//   	}
//   }
//   attemptAnswer(attempt) {
//   	for (var i = 0; i <this.riddles.length; i++) {
//   		if (attempt === this.riddles[i].answer);
//   		{
//   		this.riddles.splice(i, 1)
//   	   }
//      }
//   }	
// }


// module.exports = Sphinx;

// 1. read the test 
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass