const v4 = new SharedArrayBuffer(3, { maxByteLength: 248 });
const v6 = new Uint32Array(v4);
const v7 = v6.constructor;
try { v7.apply(248, v6); } catch (e) {}
