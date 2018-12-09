function Point(x,y){
    this.x = x
    this.y = y
    this.getDistance = function(x2,y2){
        return Math.abs(this.x - x2) + Math.abs(this.y - y2)
    }
    this.score = 0
}

function getDistance(Point1, Point2){
    return Math.abs(Point1.x - Point2.x) + Math.abs(Point1.y - Point2.y)
}

function getMax(arrayPoints){
    var xMax = 0
    var yMax = 0
    for (let i = 0 ; i < arrayPoints.length ; i++){
        if (arrayPoints[i].x > xMax){
            xMax = arrayPoints[i].x
        }
        if (arrayPoints[i].y > yMax){
            yMax = arrayPoints[i].y
        }
    }
    return [xMax, yMax]
}

function main(text){
    var lines = text.split("\n");
    var arrayPoints = []
    for (let i = 0 ; i < lines.length ; i++){
        var [x,y] = lines[i].split(',')
        x = parseInt(x)
        y = parseInt(y)
        arrayPoints.push(new Point(x,y))
    }
    var [xMax, yMax] = getMax(arrayPoints)

    var infinites = []
    for (let i = 0 ; i < xMax +1 ; i++){
        for (let j = 0 ; j < yMax + 1 ; j++){
            var currentPoint = new Point(i,j)
            var neighbour
            var distanceMin = xMax + yMax
            var both = false
            for (let k = 0 ; k < arrayPoints.length ; k++){
                currentDistance = getDistance(currentPoint, arrayPoints[k])
                if (currentDistance < distanceMin){
                    distanceMin = currentDistance
                    neighbour = arrayPoints[k]
                    both = false
                }
                else if (currentDistance == distanceMin){
                    both = true
                }
            }
            if (!both) {
                neighbour.score += 1
                if ((j == 0 || j == yMax || i == 0 || i == xMax) && (infinites.indexOf(neighbour) < 0)){
                    infinites.push(neighbour)
               }
            }
        }
    }
    console.log(arrayPoints.length)
    for (let i = 0 ; i < infinites.length ; i++){
        arrayPoints.splice(arrayPoints.indexOf(infinites[i]), 1)
    }
    console.log(arrayPoints.length)
    var maxScore = 0
    for (let k = 0 ; k < arrayPoints.length ; k++){
        if (arrayPoints[k].score > maxScore){
            maxScore = arrayPoints[k].score
        }
    }
    console.log(maxScore)
}


function readTextFile(file)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file);
    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200 || xhr.status == 0)
            {
                var allText = xhr.responseText;
                main(allText)
            }
        }
    }
    xhr.send();
}
readTextFile('file:///Users/Max/Projets/AdventOfCode/day_6/input.txt')

