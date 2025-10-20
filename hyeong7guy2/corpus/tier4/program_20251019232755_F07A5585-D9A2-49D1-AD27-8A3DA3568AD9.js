const v6 = new SharedArrayBuffer(255, { maxByteLength: 65536 });
const v7 = new Int32Array(v6);
v7.includes(Infinity);
