const v4 = new SharedArrayBuffer(127, { maxByteLength: 255 });
const v6 = new Uint8ClampedArray(v4);
const v7 = { ...v6 };
