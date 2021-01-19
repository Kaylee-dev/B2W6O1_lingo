var submitButton = document.getElementById("submitButton");

// Door math.random word een willekeuirig woord gekozen in het bestand lingo-nl.js
var lingoWords = words[Math.floor(Math.random()*words.length)];
var wordInputField = document.getElementById("word");

// Ik maak een var turn aan zodat ik bij iedere keer als er een woord word ingevoerd hij +1
var turn = 0;

function checkInput(){
	var guesses = document.getElementById("guesses");
	var wordInputField = document.getElementById("word");

	// Hier maak ik een if statement dat als de input niet gelijk is aan 5 letters geeft hij een alert.
	if(wordInputField.value.length !== 5){
		alert("Vul minimaal 5 letters in");
	}else{
		// Als eerste worden woorden gesplit in een array.
		var result = lingoWords.split('');
		var wordInputCheck = wordInputField.value;
		var inputArray = wordInputCheck.split('');

		// Hier maak ik een for loop aan die iedere keer een paragraph maakt en de input er aan toevoegd.
		for(var i = 0; i < inputArray.length; i++){
			var guessNode = document.createElement('P');
			var guessText = document.createTextNode(inputArray[i]);
			guessNode.appendChild(guessText);
		
			// Hier haalt hij het blok op en zet hij de letter in een blok. Turn is dus welke ronde en de i is welk blokje in die ronde.
			var block = document.getElementById('blok-' + turn + '-' + i);
			block.appendChild(guessNode);

			if (result[i] == inputArray[i]) {
				var block = document.getElementById('blok-' + turn + '-' + i);
				block.style.backgroundColor = "green";
			}
		}
		console.log(inputArray);
		console.log(result);
		
	}
	// Hier zorg ik dat nadat je een woord invoert hij vanzelf weer leeg komt te staan.
	wordInputField.value = "";
	turn++;
}

submitButton.onclick = checkInput;

		// // Hier heb ik een eventlistener toegvoegd dat wanneer je op enter klikt hij gelijk het word submit. 13 is de key enter.
wordInputField.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	    checkInput();
  }
});

