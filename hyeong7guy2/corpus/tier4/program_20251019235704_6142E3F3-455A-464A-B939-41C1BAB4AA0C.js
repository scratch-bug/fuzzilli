const v4 = new SharedArrayBuffer(19, { maxByteLength: 19 });
const v6 = new BigUint64Array(v4);
try { v6.fill(v6, 19); } catch (e) {}
