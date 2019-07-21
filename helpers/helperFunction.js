function incrementIterator() {
    jCount++;
    if (jCount == canvasWidth / barWidth) {
        jCount = 0;
        iCount++;
    }
}

function swapHeight(i, j) {
    let iHeight = sortArr[i].height;
    sortArr[i].height = sortArr[j].height;
    sortArr[j].height = iHeight;
}

function renderText() {
    push();
    textSize(24);
    fill(0, 0, 255);
    text(iterationCount, 0, 24);
    pop();
}

function onSelectChange() {
    var item = selectElement.value().split(' ')[0];
    selectedSort = item;
    console.log(selectedSort);
}