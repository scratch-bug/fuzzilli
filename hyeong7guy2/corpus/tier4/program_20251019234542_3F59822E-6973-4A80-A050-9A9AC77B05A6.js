const v4 = new SharedArrayBuffer(11, { maxByteLength: 2147483647 });
const v6 = new Float32Array(v4);
v6.lastIndexOf(11);
