// JavaScript Document

// Tic Tac Toe - 2 Player
// ver 1.0
// Author: Michael Whyte
//
// TicTacToe.checkwin() code modified 
// from code found at:
//
// http://aharrisbooks.net/h5g/h5g_13/tictactoe/tttAI.html
//
// TicTacToe.checkwin() code based on 
// lessons learned from the book: 
// HTML5 Game Development for Dummies
// by: Andy Harris
//
class TicTacToe {
  
  constructor(squares){
    
    // Game HTML Elements
    this.squares = squares;
    
    // Game State Variables
    this.currentPlayer = 'X';
    this.isGameOver = false;
    this.numberOfPlayedSquares = 0;
    
    // Game Board State...
    // ...basically the game memory...
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    
    // Store winning combinations
    this.winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    this.winCombosLength = this.winCombos.length;
    
  } // end constructor
  
  // Game Functions
  
  _init(){
    // clear the squares
		this.squares.each(function(){

			$(this).html('');

		});
    
    // Reset the game states...
		this.gameBoard = [null, null, null, null, null, null, null, null, null]; 
		this.currentPlayer = 'X';
		this.isGameOver = false;
		this.numberOfPlayedSquares = 0;
    
  } // end init
  
  playTurn(el){
    
    const index = el.data('index');
    
    if(this.isGameOver === true || this.gameBoard[index] !== null){
      return;
    }
    
    this._updateGameBoard(index, this.currentPlayer, el);
    this.numberOfPlayedSquares++;
    const winner = this._checkWin();
    
    if(winner === false && this.numberOfPlayedSquares < 9){
			this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
		}else if(this.numberOfPlayedSquares === 9){
			setTimeout(() => this._endGame('draw'), 100);
		}else {
      setTimeout(() => this._endGame(this.currentPlayer), 100);
    }
      
  } // end playTurn
  
  _updateGameBoard(index, value, el){
    
    this.gameBoard[index] = value;
		el.html(value);
    
  } // end updateGameBoard
  
  _checkWin(){
    
    let winner = false;
        
    for(let combo = 0; combo < this.winCombosLength; combo++){
      const a = this.winCombos[combo][0];
      const b = this.winCombos[combo][1];
      const c = this.winCombos[combo][2];

      if (this.gameBoard[a] === this.gameBoard[b]){
        if (this.gameBoard[b] === this.gameBoard[c]){
          if (this.gameBoard[a] !== null){
            winner = true;
          } // end if
        } // end if
      } // end if
    } // end for

    return winner;
    
  } // end checkWin
  
  _endGame(value){
    
    	const output = value === 'draw' ? `It's a draw...` : `${value} wins!!!`;
	  
	  	alert(output);

		this.isGameOver = true;

		const playAgain = confirm('Click OK to play again...');

		if(playAgain === true){
			this._init();
		}
    
  } // end endGame
  
} // end TicTacToe class

const ticTacToe = new TicTacToe( $('.square') );

ticTacToe.squares.click(function(){
  ticTacToe.playTurn( $(this) );
});












