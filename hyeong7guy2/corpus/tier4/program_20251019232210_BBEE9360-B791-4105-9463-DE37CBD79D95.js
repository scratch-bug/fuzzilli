const v4 = new SharedArrayBuffer(4, { maxByteLength: 40 });
const v6 = new Uint32Array(v4);
v6.lastIndexOf(SharedArrayBuffer, 40);
