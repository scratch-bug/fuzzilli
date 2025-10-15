const v2 = { maxByteLength: 127 };
const v4 = new SharedArrayBuffer(8, v2);
const v6 = new Uint8ClampedArray(v4);
v6.lastIndexOf(v2, 127);
