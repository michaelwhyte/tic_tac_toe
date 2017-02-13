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


//Game Turn Function 
$box.click(function(){
	
	var $this = $(this);
	//alert('clicked');
	
	if(!$this.has('p').length){
		if(playerTurn == 'x'){
			$this.append(playerX);
			//var points = parseFloat($this.data('value'));
			//playerXScore += points;
			//alert(playerXScore);
			if(       $box01.has('.x').length 
			       && $box02.has('.x').length 
			       && $box03.has('.x').length){
				alert('Player 01 Wins');	
			}else if(   $box04.has('.x').length 
			   	     && $box05.has('.x').length 
			         && $box06.has('.x').length){
				alert('Player 01 Wins');			 
			}else if(   $box07.has('.x').length 
			   	     && $box08.has('.x').length 
			         && $box09.has('.x').length){
				alert('Player 01 Wins');
			}else if(   $box01.has('.x').length 
			   	     && $box04.has('.x').length 
			         && $box07.has('.x').length){
				alert('Player 01 Wins');
			}else if(   $box02.has('.x').length 
			   	     && $box05.has('.x').length 
			         && $box08.has('.x').length){
				alert('Player 01 Wins');
			}else if(   $box03.has('.x').length 
			   	     && $box06.has('.x').length 
			         && $box09.has('.x').length){
				alert('Player 01 Wins');
			}else if(   $box01.has('.x').length 
			   	     && $box05.has('.x').length 
			         && $box09.has('.x').length){
				alert('Player 01 Wins');
			}else if(   $box03.has('.x').length 
			   	     && $box05.has('.x').length 
			         && $box07.has('.x').length){
				alert('Player 01 Wins');
			}else{
				playerTurn = 'o';
			}
			
			
			playerTurn = 'o';	
		}else{
			$this.append(playerO);
			//var points = parseFloat($this.data('value'));
			//playerOScore += points;
			//alert(playerOScore);
			playerTurn = 'x';	
		}
	};	
	
});












