var letter = 'X';
var crosses = "";
var noughts = "";

window.addEventListener('DOMContentLoaded', function() {
	console.log('working');
	
	addClickEvents();
	checkWinner(crosses);
})

// Functionality.

// 1. When I click in a box the app recognises it.
function addClickEvents () {
	var boxes = document.getElementsByTagName("li");    // for specific li put ("li")[array element]
	
	for (i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function (event) {
			// console.log(this.getAttribute('data-position')); //this box that i click, get the attribute associated with this tag 'data-pos'
			if (this.innerHTML === '') { // checks if box is an empty string to meet condition.
				letter = getLetter(letter);
				(letter === "X") ? crosses += (this.getAttribute("data-position")) : noughts += (this.getAttribute("data-position"));
				// crosses.spilt("").join("");
				// noughts.spilt("").join("");
				console.log(crosses);
				console.log(noughts);

				return insertLetter(this, letter);


			} else {
				return console.log("Box Full.");
			}


		})
	}
}

// 2. When the app recognises a click it puts a letter in the box.
	// - (acceptance criteria) Only works if the box is empty.

function insertLetter(box, letter) {
		return box.innerHTML = letter;
	
}
// Will use this function inside of 1.

// 3. The app alternates between 0 and X when entering a letter in a box.
function getLetter(letter) {
	if (letter === '0') {
		return 'X';
	} else {
		return '0';
	}

	// return (letter === '0') ? 'X' : '0'; // If you want to use a tenary instead of if statement.
}

// 4. Check for the winning conditions.
	// - If any row contains three of the same letters, that letter wins.
	// - If any column contains three of the same letters, that letter wins.
	// - If any diagonal contains three of the same letters, that letter wins.
	// - Otherwise, if the boxes are full it's a draw.

	// - [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2] etc. 
function checkWinner(type) {
	if (type === "0,3,6") {
		console.log("We have a winner!");
	}
}

// 5. When the game round is over, tell the user the result.

// 6. When I click the reset button, start again.

// 7. Tell the user whose turn it is.