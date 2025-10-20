const v2 = new Float32Array(2);
v2[1] = v2;
const v7 = new SharedArrayBuffer(128, { maxByteLength: 251 });
const v9 = new Int32Array(v7);
v9.set(v2);
