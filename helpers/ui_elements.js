function getSelectOptions() {
    selectElement = createSelect();
    selectOptions.forEach(element => {
        selectElement.option(element + ' Sort');
    });
    selectElement.changed(onSelectChange);
}

function getStartStopButton() {
    let startButton = createButton('Start');
    startButton.mousePressed(onStartPressed);

    let stopButton = createButton('Stop');
    stopButton.mousePressed(onStopPressed);

    let resetButton = createButton('Reset');
    resetButton.mousePressed(onResetPressed);
}