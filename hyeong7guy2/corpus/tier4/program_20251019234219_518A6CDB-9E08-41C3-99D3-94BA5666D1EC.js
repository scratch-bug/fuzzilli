const v4 = new SharedArrayBuffer(2, { maxByteLength: 7 });
const v6 = new Int8Array(v4);
v6.lastIndexOf(2);
