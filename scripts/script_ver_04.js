// JavaScript Document

// Following comments from: http://jsfiddle.net/rtoal/ThPEH

/*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
*/

// End of comments from: http://jsfiddle.net/rtoal/ThPEH

// Game Variables
var playerTurn = 'x';
var playerX = '<p class="x">X</p>';
var playerO = '<p class="o">O</p>';
var $box = $('.box');
var $box01 = $('.box_01');
var $box02 = $('.box_02');
var $box03 = $('.box_03');
var $box04 = $('.box_04');
var $box05 = $('.box_05');
var $box06 = $('.box_06');
var $box07 = $('.box_07');
var $box08 = $('.box_08');
var $box09 = $('.box_09');
var playerXScore = 0;
var playerOScore = 0;
var isWon = false;
var isDraw = false;
var playAnotherGame = false;
var numberOfSquaresPlayed = 0;

//Game Turn Function 
$box.click(function(){
	
	var $this = $(this);
	//alert('clicked');
	
	if(!$this.has('p').length){
		
		gameTurn(playerTurn, $this);
					
	};	
	
});

// Functions
function checkWin(playerClass){
	
	if(checkWinCombination($box01, $box02, $box03, playerClass)){
		return true;	
	}else if(checkWinCombination($box04, $box05, $box06, playerClass)){
		return true;
	}else if(checkWinCombination($box07, $box08, $box09, playerClass)){
		return true;
	}else if(checkWinCombination($box01, $box04, $box07, playerClass)){
		return true;
	}else if(checkWinCombination($box02, $box05, $box08, playerClass)){
		return true;
	}else if(checkWinCombination($box03, $box06, $box09, playerClass)){
		return true;
	}else if(checkWinCombination($box01, $box05, $box09, playerClass)){
		return true;
	}else if(checkWinCombination($box03, $box05, $box07, playerClass)){
		return true;
	}else{
		return false;	
	};
};

function checkDraw(){
	numberOfSquaresPlayed = $box.children('p').length;
	if(numberOfSquaresPlayed === 9){
		return true;	
	}else{
		return false;	
	}	
}


function checkWinCombination(a, b, c, playerClass){
	if(   a.has(playerClass).length
	   && b.has(playerClass).length
	   && c.has(playerClass).length){
		return true		
	}else{
		return false	
	}	
};

function winOrDrawMessage(player){

	var player = player;
	
	if(player === '.x'){
		return 'Player 01 Wins';	
	}else if(player === '.o'){
		return 'Player 02 Wins';	
	}else{
		return 'It\'s a Draw';	
	}	

}

function playAgain(){

	var PlayAnotherGame = confirm('Do you want to play again?');
	return PlayAnotherGame;
	
}

function clearPlayingBoard(){
	
	$box.empty();
	playerTurn = 'x';

};

function gameTurn(player, thisBox){
	
		if(player === 'x'){
			thisBox.append(playerX);
		}else{
			thisBox.append(playerO);	
		}
		
		isWon = checkWin('.' + player);
		
		if(isWon){
			alert(winOrDrawMessage('.' + player));
			playAnotherGame = playAgain();
			if(playAnotherGame){
				clearPlayingBoard();
				playerTurn = 'x';
				return; // this will exit click handler
			}else{
				alert('Thanks for playing');
			};
		}else{
			isDraw = checkDraw();		
		}
		
		if(isDraw){
			alert(winOrDrawMessage('draw'));
			playAnotherGame = playAgain();
			if(playAnotherGame){
				clearPlayingBoard();
				playerTurn = 'x';
				return;	// this will exit click handler
			}else{
				alert('Thanks for playing');
				
			}		
		};
		
		if(player === 'x'){
			playerTurn = 'o';
		}else{
			playerTurn = 'x';	
		}

}; 










