const v2 = { maxByteLength: 127 };
let v3 = 8;
v3--;
const v5 = new SharedArrayBuffer(v3, v2);
const v7 = new Uint8ClampedArray(v5);
v7.slice();
