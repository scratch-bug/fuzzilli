const v2 = { maxByteLength: 4096 };
const v4 = new SharedArrayBuffer(9, v2);
const v6 = new Float64Array(v4);
v6.indexOf(v2, 4096);
