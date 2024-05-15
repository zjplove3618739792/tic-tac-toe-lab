/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
let board;
let turn;
let winner;
let tie;

const squareEls = document.querySelectorAll('sqr');
const messageEl = document.getElementById('message');
init = () => {
    console.log ('Game started');
}
board = ['','','','','','','','',''];
turn = 'X';
winner = false;
tie = false;

render ();








  
  