
export function getIndex(letter){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
	return alphabet.indexOf(letter)
}
export function getLetter(index){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
	return alphabet[index]
}

function main(allText){
	var sonsArray = []
		potentialArray = []
	for (let i =0 ; i < 26 ; i++){
		var tempArray = []
		sonsArray.push(tempArray)
		potentialArray.push(i)
	}
	var lines = allText.split('\n')
	var regex = /[a-z .]+/
	var index = -1
	var res = ''
	

	lines.forEach(function(e){
		[_, a, b ,_] = e.split(regex)
		indexA = getIndex(a)
		indexB = getIndex(b)
		console.log(a,"x",b)
		sonsArray[indexB].push(indexA)
	})
	console.log(sonsArray)
	for (let i = 0 ; i < 26 ; i++){
		var j = 0
		var nextIndex = -1
		while (nextIndex == -1){
			var currentIndexPotential = potentialArray[j]
			if (sonsArray[currentIndexPotential].length == 0){
				nextIndex = potentialArray[j]
			}
			else{j += 1}
		}
		console.log('Next Index : ',nextIndex)
		console.log('j : ', j)
		potentialArray.splice(j,1)
		console.log(potentialArray)

		res += getLetter(nextIndex)
		for(let k = 0 ; k < potentialArray.length ; k++){
			indexToRemove = sonsArray[potentialArray[k]].indexOf(nextIndex)
			if (indexToRemove != -1){
				sonsArray[potentialArray[k]].splice(indexToRemove,1)
			}
		}
	}
	console.log(res)
}
//XJRZNSLPTIFDHQUOCEGKVMAWBY

function readTextFile(file){
	var xhr = new XMLHttpRequest()
	xhr.open('GET', file)
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status == 0){
                var allText = xhr.responseText;
                main(allText)
            } 
        }
    }
    xhr.send(null)
}

//readTextFile('file:///Users/Max/Projets/AdventOfCode/day_7/input.txt')