// class QuickSort {
//     constructor() {
//         this.iterationCount = 0;
//     }
// }

// QuickSort.prototype.sort = async function (start, end) {
//     if (start >= end) {
//         noLoop();
//     }
//     let part = this.partition();
//     await Promise.all([
//         this.sort(start, part - 1),
//         this.sort(part + 1, end)
//     ]);
// }

// QuickSort.prototype.partition = async function (start, end) {
//     let pivot = sortArr[end];
//     let i = start;

//     for (let j = start; j < end; j++) {
//         if (sortArr[j] < pivot) {
//             await this.swap(i, j);
//             i++;
//             this.iterationCount++;
//         }
//     }
//     await this.swap(i, end);

//     return i;
// }

// QuickSort.prototype.reset = function () {
//     this.iterationCount = 0;
// }

// QuickSort.prototype.swap = async function (i, j) {
//     await sleep(100);
//     let iHeight = sortArr[i].height;
//     sortArr[i].height = sortArr[j].height;
//     sortArr[j].height = iHeight;
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
