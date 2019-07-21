function bubbleSort() {

    if (sortArr[iCount].height < sortArr[jCount].height) {
        swapHeight(iCount, jCount);
        iterationCount++;
    }

    incrementIterator();

    if (iCount == canvasWidth / barWidth) {
        noLoop();
    }
}