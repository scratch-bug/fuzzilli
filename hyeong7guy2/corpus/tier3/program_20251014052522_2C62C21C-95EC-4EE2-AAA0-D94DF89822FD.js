const v2 = new SharedArrayBuffer(3);
const v4 = new Uint8Array(v2);
v4[2] = v4;
