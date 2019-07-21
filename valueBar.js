class ValueBar {
    constructor(position, height) {
        this.position = position;
        this.height = height;

        this.strokeWeight = 1;
    }
}

ValueBar.prototype.render = function () {
    push();
    strokeWeight(this.strokeWeight);
    stroke(0);
    rect(this.position * barWidth,
        canvasHeight - this.height,
        barWidth,
        this.height);

    pop();
}
