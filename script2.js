let boxes = document.querySelectorAll('.box');
let player = 'X';

function changePlayer() {
  if (player == 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
}

let i = 0;
boxes.forEach(function(box) {
  box.onclick = function(event) {
    i++
    if (event.target.innerHTML == '') {
      event.target.innerHTML = player;
      if (checkWin()) {
        alert('You Have Won !!')
      } else {
        changePlayer()
      }
      if (i == 9 && checkDraw()) {
        alert("It's a draw !!")
      }
    } else {
      alert('Space has already been taken up')
    } 
  };
});

let winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function checkWin() {
  let winner = false
  winningCombos.forEach(function(element){
    if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
      winner = true
    } 
  })
  return winner;
}

function checkDraw() {
  let draw = false
  boxes.forEach(function(element) {
    if (element != '') {
      draw = true
    }
  })
  return draw
}

let newButton = document.getElementById('myButton')
newButton.onclick = function () {
  for (let j = 0; j <= 8; j++) {
    boxes[j].innerHTML = ''
  }
  player='X';
  i = 0;
}

   
