const v5 = new SharedArrayBuffer(255, { maxByteLength: 65536 });
const v6 = new Int32Array(v5);
v6.includes(255);
