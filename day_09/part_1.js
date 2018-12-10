function main(allText) {
  allText = allText.split("\n")[3];
  var regex = /[a-z ;]+/;
  var [playerNb, worth] = [
    parseInt(allText.split(regex)[0]),
    parseInt(allText.split(regex)[1])
  ];
  console.log(playerNb, worth);
  var player = 1;
  var resPlayer = [];
  for (let i = 0; i < playerNb; i++) {
    resPlayer.push(0);
  }

  var mainAr = [0];
  var index = 1;
  for (let i = 1; i <= worth; i++) {
    if (i % 23 == 0) {
      // Add the 7th element of mainAr and 23 to the current player
      var temp = parseInt(mainAr.splice(6, 1));
      console.log(temp);
      resPlayer[player - 1] += temp + i;

      // Update index
      index = 6;
    } else {
      mainAr.splice(index, 0, i);
      // Update index
      index += 2;
      if (index > mainAr.length) {
        index = index % mainAr.length;
      }
    }

    // Update player
    if (player == playerNb) {
      player = 1;
    } else {
      player += 1;
    }
  }
  console.log(resPlayer);
  return Math.max.apply(Math, resPlayer);
}

function readTextFile(file) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", file);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status == 0) {
        var allText = xhr.responseText;
        console.log(main(allText));
      }
    }
  };
  xhr.send(null);
}
readTextFile("file:///Users/Max/Projets/AdventOfCode2018/day_09/input.txt");
