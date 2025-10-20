const v2 = new SharedArrayBuffer(257);
const v4 = new Uint8ClampedArray(v2);
const v6 = new Uint16Array(v4, 257, 257);
const t3 = v6.constructor;
new t3(v4);
