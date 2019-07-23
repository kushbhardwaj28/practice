function swapHeight(i, j) {
    let iHeight = sortArr[i].height;
    sortArr[i].height = sortArr[j].height;
    sortArr[j].height = iHeight;
}

function renderText(count) {
    push();
    textSize(24);
    fill(0, 0, 255);
    text(count, 0, 24);
    pop();
}

function onSelectChange() {
    var item = selectElement.value().split(' ')[0];
    switch (item) {
        // case selectOptions[1]:
        //     currentSorting = quickSort;
        //     break;
        case selectOptions[0]:
        default:
            currentSorting = bubbleSort;
            break;
    }
    onResetPressed();
}

function onStartPressed() {
    console.log('start');
    loop();
}

function onStopPressed() {
    console.log('stop');
    noLoop();
}

function onResetPressed() {
    noLoop();
    sortArr = [];
    originalArr.forEach((originalVal) => {
        sortArr.push(new ValueBar(originalVal.position, originalVal.height));
    });
    currentSorting.reset();
    redraw();
}
