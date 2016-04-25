var minNumber = 19;
var maxNumber = 120;
var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min, max){
	
    document.getElementById("target").innerHTML = (Math.floor(Math.random()*(max-min+1)+min));
}
$( ".crystal1" ).click(function() {
  alert( "Work damnit." );
});
