const v2 = new SharedArrayBuffer(14);
const v4 = new Uint16Array(v2);
v4[5];
v4[4] = v4;
