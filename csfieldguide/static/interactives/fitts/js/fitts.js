let numCols = 0;
let start = null;
let swap = false;
let lastMousePosition = null;
let count = 0;
const MAX_COUNT = 11;
let cols = [];
let colsToWidths = [];
let currentColToWidth = null;
let results = [];
let trialNum = 1;


$( document ).ready(function() {
  numCols = $('.col-sm').length;
  cols = $(".col-sm").map(function() { return this; }).get();
  for (let col = 0; col < Math.floor(numCols / 2); col++) {
    for (let width = 1; width <= 3; width++) {
      colsToWidths.push({ "col": col, "width": width })
    }
  }

  for (let col of cols) {
    $(col).click(clickHandler);
  }

  currentColToWidth = getRandomItemFromList(colsToWidths);
  colsToWidths.splice(colsToWidths.indexOf(currentColToWidth), 1);
  setColumns(currentColToWidth["col"], currentColToWidth["width"]);
  start = new Date().getTime();
});


function clickHandler(event) {
  if (this.classList.contains("bg-danger")) {
    let end = new Date().getTime();
    let time = end - start;
    let width = this.offsetWidth;
    let distance = Math.abs((this.offsetLeft + this.offsetWidth / 2) - lastMousePosition);
    results.push({ "trial": trialNum, "distance": distance, "time": time, "width": width });

    lastMousePosition = event.pageX;

    resetCols();
    if (count === MAX_COUNT) {
      currentColToWidth = getRandomItemFromList(colsToWidths);

      if (currentColToWidth == null) {
        showResults();
      }

      colsToWidths.splice(colsToWidths.indexOf(currentColToWidth), 1);
      count = 0;
      trialNum++;
    }
    setColumns(currentColToWidth["col"], currentColToWidth["width"]);
    count++;
    start = new Date().getTime();
  }
}


function setColumns(index, width) {
  let otherIndex = numCols - 1 - index;
  if (swap) {
    [index, otherIndex] = [otherIndex, index];
  }
  swap = !swap;

  cols[index].classList.replace("col-sm", "col-sm-" + width);
  cols[otherIndex].classList.replace("col-sm", "col-sm-" + width);
  cols[index].classList.add("bg-danger");
}


function resetCols() {
  for (let col of cols) {
    col.className = "col-sm";
  }
}


function getRandomItemFromList(list) {
  return list[Math.floor(Math.random()*list.length)];
}


function showResults() {
  let tableBody = document.getElementById("results-body");
  for (let result of results) {
    let row = tableBody.insertRow()
    let [trial, distance, width, time] = [result["trial"], result["distance"], result["width"], result["time"]]
    row.insertCell(0).innerText = trial;
    row.insertCell(1).innerText = distance;
    row.insertCell(2).innerText = width;
    row.insertCell(3).innerText = time;
  }
}