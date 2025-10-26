let x = 42;
let y = 3.14;
let z = x + y;

let a = x | 0;
let b = x & 15;
let c = x << 2;

let d = y * 2.0;
let e = y / 1.5;
let f = Math.sqrt(y);

let g = x + y;
let h = y - x;
let i = x * y;

let arr = [x, y, z];
let obj = {num: x, float: y, mixed: z};

function testFunc(num) {
    return num + 0.1;
}

let result = testFunc(x);

if (x > 0) {
    let temp = x + 0.5;
}

for (let i = 0; i < 3; i++) {
    let loopVar = i + 0.1;
}

console.log("Test completed");
