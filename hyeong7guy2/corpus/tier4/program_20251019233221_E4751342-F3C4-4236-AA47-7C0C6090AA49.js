const v4 = new ArrayBuffer(1000, { maxByteLength: 1000 });
const v6 = new Uint16Array(v4);
new Int32Array(v6);
