$(document).ready(function () {
	var minNumber = 19;
	var maxNumber = 120;
	var audioWin = new Audio('assets/audio/winner.wav');
	var audioLose = new Audio('assets/audio/loser.mp3');
	cryValue1 = Math.floor((Math.random() * 12) + 1);
	console.log(cryValue1);
	cryValue2 = Math.floor((Math.random() * 12) + 1);
	console.log(cryValue2);
	cryValue3 = Math.floor((Math.random() * 12) + 1);
	console.log(cryValue3);
	cryValue4 = Math.floor((Math.random() * 12) + 1);
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

	console.log(randomNumber);

	var check = function () {
		if (yourNumber == randomNumber) {
			yourWins++;
			$('#wins').html('<h6>' + yourWins + '</h6>');
			audioWin.play()
			alert("You Win!");
			restart();
		}
		if (yourNumber > randomNumber) {
			yourLosses++;
			$('#losses').html('<h6>' + yourLosses + '</h6>');
			audioLose.play();
			alert("You Lose!");
			restart();


		}
	}

	var restart = function () {
		yourNumber = 0;
		$("#player").html(yourNumber);
		randomNumber = targetNumber(19, 120);
		$('#target').html('<h6>' + randomNumber + '</h6>');


		cryValue1 = Math.floor((Math.random() * 12) + 1);
		console.log(cryValue1);
		cryValue2 = Math.floor((Math.random() * 12) + 1);
		console.log(cryValue2);
		cryValue3 = Math.floor((Math.random() * 12) + 1);
		console.log(cryValue3);
		cryValue4 = Math.floor((Math.random() * 12) + 1);
		console.log(cryValue4);

	}

});