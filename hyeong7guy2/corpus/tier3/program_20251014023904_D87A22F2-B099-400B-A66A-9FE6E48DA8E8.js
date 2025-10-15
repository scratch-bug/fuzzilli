const v4 = new SharedArrayBuffer(10, { maxByteLength: 65537 });
const v6 = new Int8Array(v4);
v6[7] = v6;
