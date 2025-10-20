const v4 = new ArrayBuffer(13, { maxByteLength: 65535 });
const v6 = new BigUint64Array(v4);
v6[0] = v6;
