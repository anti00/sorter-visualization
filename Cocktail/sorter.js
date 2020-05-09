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

var i = 1;
var j = num.length - 1;

function draw() {
    background(0);
    //Draw Lines
    for (let i = 0; i < num.length; i++) {
        stroke(100, 230, 123);
        line(i, height, i, height - num[i]);
    }
    for (let n = 0; n < 10000; n++) {
        //Cocktail sort
        if (i <= num.length) {
            if (num[i] > num[i - 1]) {
                num = Swap(num, i, i - 1);
            }
            i++;
        } else {
            if (j >= 0) {
                if (num[j] < num[j + 1]) {
                    num = Swap(num, j + 1, j);
                }
                j--;
            } else {
                j = num.length - 1;
                i = 1;
            }
        }
    }
}