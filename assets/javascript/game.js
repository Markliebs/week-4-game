var minNumber = 19;
var maxNumber = 120;
var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crsValue1 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(crsValue1)
var crsValue2 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(crsValue2)
var crsValue3 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(crsValue3)
var crsValue4 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(crsValue4);
var yourNumber = 0
var yourWins = 0
var yourLosses = 0

$('#player').html('<h6>' + yourNumber + '</h6>');
$('#wins').html('<h6>' + yourWins + '</h6>');
$('#losses').html('<h6>' + yourLosses + '</h6>');

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min, max) {

	document.getElementById("target").innerHTML = (Math.floor(Math.random() * (max - min + 1) + min));
}

$(".crystal1").click(function () {
	yourNumber += crsValue1
$('#player').html('<h6>' + crsValue1 + '</h6>');
	//  alert( "I think unicorns are kick ass!" );
});
$(".crystal2").click(function () {
	alert("I think unicorns are kick ass!");
});
$(".crystal3").click(function () {
	alert("I think unicorns are kick ass!");
});
$(".crystal4").click(function () {
	alert("I think unicorns are kick ass!");
});