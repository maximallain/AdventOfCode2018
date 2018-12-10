function main(allText) {
  console.log(allText);
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
readTextFile("file:///Users/Max/Projets/AdventOfCode2018/day_09/input.txt");
