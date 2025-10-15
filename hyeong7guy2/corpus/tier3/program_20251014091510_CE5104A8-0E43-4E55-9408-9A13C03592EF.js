const v4 = new ArrayBuffer(64, { maxByteLength: 65536 });
const v6 = new Uint32Array(v4);
v6[0] = 3.3;
