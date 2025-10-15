const v6 = new SharedArrayBuffer(8, { maxByteLength: 127 });
const v8 = new Uint8ClampedArray(v6);
v8[0] = 64;
