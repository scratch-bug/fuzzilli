const v2 = { maxByteLength: 16 };
let v3;
try { v3 = v2(SharedArrayBuffer); } catch (e) {}
const v5 = new SharedArrayBuffer(16, v2);
const v7 = new Uint32Array(v5);
v7[3] = v3;
