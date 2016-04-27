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
	yourNumber += cryValue1;
$('#player').html('<h6>' + cryValue1 + '</h6>');
	
});
$(".crystal2").click(function () {
	$('#player').html('<h6>' + cryValue2 + '</h6>');

});
$(".crystal3").click(function () {
	$('#player').html('<h6>' + cryValue3 + '</h6>');

});
$(".crystal4").click(function () {
	$('#player').html('<h6>' + cryValue4 + '</h6>');

});