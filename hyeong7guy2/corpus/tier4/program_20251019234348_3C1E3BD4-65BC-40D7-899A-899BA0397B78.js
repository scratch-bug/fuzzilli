const v4 = new SharedArrayBuffer(8, { maxByteLength: 127 });
const v6 = new BigInt64Array(v4);
v6.lastIndexOf(SharedArrayBuffer, 127);
