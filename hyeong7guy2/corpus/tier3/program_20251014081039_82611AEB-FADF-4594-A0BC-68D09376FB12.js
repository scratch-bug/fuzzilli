const v4 = new SharedArrayBuffer(8, { maxByteLength: 16 });
const v6 = new Uint16Array(v4);
v6[1] += 16;
