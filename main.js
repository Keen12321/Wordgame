var word = commonWords[Math.floor(Math.random() * commonWords.length)]
var char = document.querySelector("#guess")
var maxTurns = 10
var remainingGuesses = 0
var currentIndex = word
var guessedLetters = []
var hasFinished = false
var underscores = ''

console.log(word)

for (var i = 0; i < word.length; i += 1) {
	underscores += '_'
}


document.querySelector('.letterGuess').addEventListener("click", function(){
	for(let i = 0; i < word.length; i++){
		if(char.value == word.charAt(i)){ 
				let spl = underscores.split('')
					spl[i] = char.value
						underscores = spl.join('')
		}
	}
	document.querySelector('#guess').value = ''
	document.querySelector('#guess').focus()
	document.querySelector('#correct').innerHTML = underscores
})

document.querySelector('#correct').innerHTML = underscores
document.querySelector('#turns-remaining').innerHTML = maxTurns + " turns remaining"