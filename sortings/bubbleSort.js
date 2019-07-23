class BubbleSort {
    constructor() {
        this.i = 0;
        this.j = 0;
        this.iterationCount = 0;
    }
}

BubbleSort.prototype.sort = function () {
    if (sortArr[this.j].height > sortArr[this.j + 1].height) {
        swapHeight(this.j, this.j + 1);
        this.iterationCount++;
    }

    this.incrementCounter();

    if (!(this.i < arrLength - 1)) {
        noLoop();
    }
}

BubbleSort.prototype.incrementCounter = function () {
    this.j++;
    if (!(this.j < arrLength - this.i - 1)) {
        this.j = 0;
        this.i++;
    }
}

BubbleSort.prototype.reset = function () {
    this.i = 0;
    this.j = 0;
    this.iterationCount = 0;
}
