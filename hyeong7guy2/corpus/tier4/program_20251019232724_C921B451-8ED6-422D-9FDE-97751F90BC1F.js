const v2 = { maxByteLength: 14 };
let v3 = 14;
v3--;
const v5 = new SharedArrayBuffer(v3, v2);
const v7 = new Uint8ClampedArray(v5);
Int8Array.from(v7);
