function getRes(nbChild, nbMeta, queue) {
  var value = 0;
  if (nbChild == 0) {
    for (let i = 0; i < nbMeta; i++) {
      value += parseInt(queue.shift());
    }
  } else {
    var valuesChildArray = [];
    for (let j = 0; j < nbChild; j++) {
      valuesChildArray.push(
        getRes(parseInt(queue.shift()), parseInt(queue.shift()), queue)
      );
    }
    for (let i = 0; i < nbMeta; i++) {
      var indexE = parseInt(queue.shift());
      if (indexE <= valuesChildArray.length && indexE > 0) {
        value += valuesChildArray[indexE - 1];
      }
    }
  }
  return value;
}

function main(allText) {
  var data = allText.split(" ");
  var res = 0;
  console.log(data);
  console.log(
    getRes(parseInt(data.shift()), parseInt(data.shift()), data, res)
  );
}

function readTextFile(file) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", file);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status == 0) {
        var allText = xhr.responseText;
        main(allText);
      }
    }
  };
  xhr.send(null);
}

readTextFile("file:///Users/Max/Projets/AdventOfCode2018/day_08/input.txt");
