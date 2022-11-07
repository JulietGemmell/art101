/**
 * Author: Juliet Gemmell
 * Created: 11.07.2022
 * License: Public Domian
 **/
$('#challenge').append('<button id=buttonChalEL> click me.</button>');

$('#problems').append('<button id=buttonProbEL> I want to break free</button>');

$('#results').append('<button id=buttonResEL> CLICK HERE! </button>');


$('#buttonChalEL').click(function(){
   $('#challenge').toggleClass('special');
});

$('#buttonProbEL').click(function(){
  $('#problems').toggleClass('specialer');
});

$('#buttonResEL').click(function(){
  $('#results').toggleClass('specialler');
});
