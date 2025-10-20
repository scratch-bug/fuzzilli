const v4 = new SharedArrayBuffer(16, { maxByteLength: 16 });
const v6 = new Uint8ClampedArray(v4);
v6.fill(v6);
