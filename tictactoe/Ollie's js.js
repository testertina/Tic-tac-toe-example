var letter = 'X';
var winConditions = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
];

var moves = {[]
    X: [],
    O: []
};

window.addEventListener('DOMContentLoaded', function() {
    console.log('working');
    addClickEvents();
})

// 1. When I click in a box the app recognises it.
function addClickEvents() {
    var boxes = document.getElementsByTagName('li');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
            if (this.innerHTML === '') {
                letter = getLetter(this, letter);
                return insertLetter(this, letter);
            } else {
                return console.log('box full');
            }
        })
    }
}


// 2. When the app recognises a click, it puts a letter in the box
    // - Only works if the box is empty
function insertLetter(box, letter) {
    box.innerHTML = letter;
    return checkWinner(letter);
}

// 3. The app alternates between O and X when ewntering a letter in a box
function getLetter(box, letter) {
    var result = (letter === 'O') ? 'X' : 'O'; 
    var boxNumber = parseInt(box.getAttribute('data-position'));
    moves[result].push(boxNumber);
    console.log(moves);
    return result;
}

// 4. Check the win conditions:
  // - If any row contains three of the same letters, that letter wins
  // - If any column contains three of the same letters, that letter wins
  // - If any diagonal contains three of the same letters, that letter wins
  // - Otherwise if the boxes are full it's a draw
function checkWinner(letter) {
    var count = 0;

    winConditions.forEach(function(condition) {

        moves[letter].forEach(function(number) {
            
            if (condition.indexOf(number) !== -1) {
                count++;
            }
        })

        if (count === 3) {
            alert(letter + " WINS!");
        } else {
            count = 0;
        }
    });
}



// 5. When a game round is over, tell the user the result

// 6. When I click the reset button, start the game again

// 7. Tell the user whose turn it is