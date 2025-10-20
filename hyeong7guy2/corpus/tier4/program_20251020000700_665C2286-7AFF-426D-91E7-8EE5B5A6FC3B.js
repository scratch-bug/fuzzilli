const v2 = new SharedArrayBuffer(64);
const v4 = new Uint32Array(v2);
v4[5] = v4;
