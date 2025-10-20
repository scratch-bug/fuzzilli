const v4 = new ArrayBuffer(2, { maxByteLength: 3 });
const v6 = new Uint8ClampedArray(v4);
v6.slice();
