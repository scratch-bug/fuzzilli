const v4 = new SharedArrayBuffer(8, { maxByteLength: 127 });
const v6 = new Uint8ClampedArray(v4);
v6.indexOf(8);
