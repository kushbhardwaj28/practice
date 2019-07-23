function setup() {
  createCanvas(canvasWidth, canvasHeight);

  getStartStopButton();
  getSelectOptions();
  for (let i = 0; i < canvasWidth / barWidth; i++) {
    let randomHeight = floor(random(10, canvasHeight));

    sortArr.push(new ValueBar(i, randomHeight));

    originalArr.push(new ValueBar(i, randomHeight));
  }

  arrLength = sortArr.length;

  currentSorting = bubbleSort;
}

function draw() {
  background(51);

  for (let i = 0; i < canvasWidth / barWidth; i++) {
    sortArr[i].render();
  }
  
  currentSorting.sort();

  renderText(currentSorting.iterationCount);
}
