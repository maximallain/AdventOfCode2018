
function getIndex(letter){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
	return alphabet.indexOf(letter)
}

function getLetter(index){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
	return alphabet[index]
}

function initialize(allText){
	var sonsArray = []
	var	potentialArray = []
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
		var _,a,b
		[_, a, b ,_] = e.split(regex)
		var indexA = getIndex(a)
		var indexB = getIndex(b)
		sonsArray[indexB].push(indexA)
	})
	return [potentialArray, sonsArray]
}

function getAvailableTasks(potentialArray, sonsArray, workingTaskArray){
	var availableTasks = []
	for(let k = 0 ; k < potentialArray.length ; k++){
		if ((sonsArray[potentialArray[k]].length == 0) && (workingTaskArray.indexOf(potentialArray[k]) == -1)){ 
			availableTasks.push(potentialArray[k]) 
		}
	}
	return availableTasks
}

function update(potentialArray, sonsArray, endedTask){
	//console.log('avant : ',potentialArray)
	potentialArray.splice(potentialArray.indexOf(endedTask),1)
	//console.log('après : ',potentialArray)
	sonsArray.forEach(function(e){
		var indexE = e.indexOf(endedTask)
		if (indexE != -1){
			e.splice(indexE,1)
		}
	})
	//return [potentialArray, sonsArray]
}

function main(allText){
	var time = 0
	var	workers = 0
	var endTimeArray = []
	var	workingTaskArray = []
	var [potentialArray, sonsArray] = initialize(allText)
	//console.log(potentialArray)
	//console.log(sonsArray)
	var availableTasks = getAvailableTasks(potentialArray, sonsArray, workingTaskArray)
	//console.log(availableTasks)

	while (potentialArray.length != 0){
		// On affecte les travailleurs aux tâches
		while(workers < 5 && availableTasks.length != 0){
			workers += 1
			var task = availableTasks.shift(0)
			endTimeArray.push(time + task + 60)
			workingTaskArray.push(task)
		}
		console.log('//// ', time,' ////')
		console.log(endTimeArray)
		console.log(workingTaskArray)
		console.log(availableTasks)
		console.log(potentialArray)
		// Si une tâche est finie, on update
		var taskToRemove = endTimeArray.indexOf(time)
		while(taskToRemove != -1){
			var endedTask = workingTaskArray[taskToRemove]
			//console.log('endedTask : ',endedTask)
			update(potentialArray, sonsArray, endedTask)
			//console.log('potentialArray : ',potentialArray)
			workingTaskArray.splice(taskToRemove,1)
			endTimeArray.splice(taskToRemove,1)
			taskToRemove = endTimeArray.indexOf(time)
			workers -= 1
		}
		availableTasks = getAvailableTasks(potentialArray, sonsArray, workingTaskArray)
		time += 1
		if (time > 1000) {
		break
		}
	}
	console.log(time)
	
}


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

readTextFile('file:///Users/Max/Projets/AdventOfCode/day_7/input.txt')