// JavaScript Document

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
var isWon = false;
var isDraw = false;
var playAnotherGame = false;
var numberOfSquaresPlayed = 0;

// Click Event Listener 
$box.click(function(){
	
	var $this = $(this);
	
	if(!$this.has('p').length){
		gameTurn(playerTurn, $this);
	};	
	
});

// Functions
function gameTurn(player, thisBox){
	
	  if(player === 'x'){
		  thisBox.append(playerX);
	  }else{
		  thisBox.append(playerO);	
	  }
	  
	  isWon = checkWin('.' + player);
	  
	  if(isWon){
		  gameEnd(player);
		  return;
	  }else{
		  isDraw = checkDraw();		
	  }
	  
	  if(isDraw){
		  gameEnd('draw');
		  return;
	  };
	  
	  if(player === 'x'){
		  playerTurn = 'o';
	  }else{
		  playerTurn = 'x';	
	  };

};

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

function checkWinCombination(a, b, c, playerClass){
	
	if(   a.has(playerClass).length
	   && b.has(playerClass).length
	   && c.has(playerClass).length){
		return true		
	}else{
		return false	
	}	

};

function checkDraw(){
	
	numberOfSquaresPlayed = $box.children('p').length;
	if(numberOfSquaresPlayed === 9){
		return true;	
	}else{
		return false;	
	}	

};

function gameEnd(playerOrDraw){
	
	alert(winOrDrawMessage(playerOrDraw));
	playAnotherGame = confirm('Do you want to play again?');
	if(playAnotherGame){
		$box.empty();
		playerTurn = 'x';
	}else{
		alert('Thanks for playing');
		$box.off('click');
	};

};

function winOrDrawMessage(player){

	if(player === 'x'){
		return 'Player 01 Wins';	
	}else if(player === 'o'){
		return 'Player 02 Wins';	
	}else{
		return 'It\'s a Draw';	
	}	

};
 










