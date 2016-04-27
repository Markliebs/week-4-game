$(document).ready(function () {
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

	function targetNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
		
	};
	var randomNumber = targetNumber(19, 120);
	$('#target').html('<h6>' + randomNumber + '</h6>');

	$(".crystal1").click(function () {
		yourNumber += cryValue1;
		$('#player').html('<h6>' + yourNumber + '</h6>');
		check()

	});
	$(".crystal2").click(function () {
		yourNumber += cryValue2;
		$('#player').html('<h6>' + yourNumber + '</h6>');
		check()

	});
	$(".crystal3").click(function () {
		yourNumber += cryValue3;
		$('#player').html('<h6>' + yourNumber + '</h6>');
		check()

	});
	$(".crystal4").click(function () {
		yourNumber += cryValue4;
		$('#player').html('<h6>' + yourNumber + '</h6>');
		check()
	});

	console.log(targetNumber);

	var check = function () {
		if (yourNumber == randomNumber) {
			yourWins++;
			$('#wins').html('<h6>' + yourWins + '</h6>');
			alert("You Win!");
		}
			if (yourNumber > randomNumber) {
			yourLosses++;
			$('#losses').html('<h6>' + yourLosses + '</h6>');
				alert("You Lose!");


		}
	}



	//Ignore this part
	//	if (yourNumber == targetNumber) {
	//		yourWins++;
	//		$('#wins').html('<h6>' + yourWins + '</h6>');
	//
	//	}

});