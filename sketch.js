
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  selectElement = createSelect();
  selectOptions.forEach(element => {
    selectElement.option(element + ' Sort');
  });
  selectElement.changed(onSelectChange);

  for (let i = 0; i < canvasWidth / barWidth; i++) {
    var valueBar = new ValueBar(i, floor(random(10, canvasHeight)));
    sortArr.push(valueBar);
  }
  originalArr = sortArr;
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
