function getRes(nbChild, nbMeta, queue, res) {
  for (let j = 0; j < nbChild; j++) {
    res = getRes(parseInt(queue.shift()), parseInt(queue.shift()), queue, res);
  }
  for (let i = 0; i < nbMeta; i++) {
    res += parseInt(queue.shift());
  }
  return res;
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
