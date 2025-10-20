const v2 = { maxByteLength: 3 };
let v3 = 1;
v3++;
const v5 = new ArrayBuffer(v3, v2);
const v7 = new Uint8ClampedArray(v5);
new Uint32Array(v7);
