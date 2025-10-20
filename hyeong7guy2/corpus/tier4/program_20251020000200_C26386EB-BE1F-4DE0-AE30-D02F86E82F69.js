const v2 = { maxByteLength: 16 };
let v3 = 16;
v3--;
const v5 = new SharedArrayBuffer(v3, v2);
const v7 = new Uint8ClampedArray(v5);
new Uint8Array(v7);
