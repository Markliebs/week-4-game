var minNumber = 19;
var maxNumber = 120

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    document.getElementById("target").innerHTML = (Math.floor(Math.random()*(max-min+1)+min));
}
