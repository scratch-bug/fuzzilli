const v5 = new SharedArrayBuffer(11, { maxByteLength: 2147483647 });
const v7 = new Float32Array(v5);
v7[1] = v7;
Uint8Array.from(v7);
