function Swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    return (arr);
}
//számok generálása
var num = [];
for (let i = 0; i < 1600; i++) {
    num.push(Math.floor(Math.random() * 720) + 1);
}

function setup() {
    createCanvas(1600, 785)
}

var i = 0;
var gap = num.length;
var shrink = 1.3;
var sorted = false;

function draw() {
    background(0);
    //Draw Lines
    for (let i = 0; i < num.length; i++) {
        stroke(100, 230, 123);
        line(i, height, i, height - num[i]);
    }
    for (let n = 0; n < 1000; n++) {
        //Comb sort
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
        }

        if (i + gap >= num.length) {
            i = 0;
        }
        if (num[i] > num[i + gap]) {
            num = Swap(num, i, i + gap);
        }
        i++;

        if (sorted) {
            noLoop();
        }
    }
}