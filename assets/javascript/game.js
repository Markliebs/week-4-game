$(document).ready(function() {
var minNumber = 19;
var maxNumber = 120;
var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var cryValue1 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(cryValue1);
var cryValue2 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(cryValue2);
var cryValue3 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(cryValue3);
var cryValue4 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(cryValue4);
var yourNumber = 0;
var yourWins = 0;
var yourLosses = 0;

$('#player').html('<h6>' + yourNumber + '</h6>');
$('#wins').html('<h6>' + yourWins + '</h6>');
$('#losses').html('<h6>' + yourLosses + '</h6>');

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min, max) {

	document.getElementById("target").innerHTML = (Math.floor(Math.random() * (max - min + 1) + min));
}

$(".crystal1").click(function () {
	var score1 = yourNumber += cryValue1;
	$('#player').html('<h6>' + score1 + '</h6>');

});
$(".crystal2").click(function () {
	var score2 = yourNumber += cryValue2;
	$('#player').html('<h6>' + score2 + '</h6>');

});
$(".crystal3").click(function () {
	var score3 = yourNumber += cryValue3;
	$('#player').html('<h6>' + score3 + '</h6>');

});
$(".crystal4").click(function () {
	var score4 = yourNumber += cryValue4;
	$('#player').html('<h6>' + score4 + '</h6>');

});
	
	if (yourNumber == randomNumberFromRange) {
		yourWins++;
		$('#wins').html('<h6>' + yourWins + '</h6>');
		
	}
});