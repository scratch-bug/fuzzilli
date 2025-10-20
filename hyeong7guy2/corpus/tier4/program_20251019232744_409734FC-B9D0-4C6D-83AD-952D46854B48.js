const v4 = new SharedArrayBuffer(8, { maxByteLength: 1024 });
const v6 = new BigUint64Array(v4);
v6[0] = v6;
