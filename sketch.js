
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  getStartStopButton();
  getSelectOptions();
  for (let i = 0; i < canvasWidth / barWidth; i++) {
    let randomHeight = floor(random(10, canvasHeight));

    sortArr.push(new ValueBar(i, randomHeight));

    originalArr.push(new ValueBar(i, randomHeight));
  }
}

function draw() {
  background(51);

  for (let i = 0; i < canvasWidth / barWidth; i++) {
    sortArr[i].render();
  }

  switch (selectedSort) {
    case selectOptions[0]:
    default:
      bubbleSort();
      break;
  }

  renderText();
}
