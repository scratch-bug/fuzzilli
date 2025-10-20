const v2 = { maxByteLength: 13 };
const v4 = new ArrayBuffer(7, v2);
const v6 = new Int8Array(v4, v2, 7);
v6.lastIndexOf();
