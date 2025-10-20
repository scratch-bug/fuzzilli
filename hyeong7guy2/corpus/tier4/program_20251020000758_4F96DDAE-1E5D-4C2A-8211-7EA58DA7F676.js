const v5 = new SharedArrayBuffer(256, { maxByteLength: 536870888 });
const v7 = new BigUint64Array(v5);
try { v7.set("copyWithin"); } catch (e) {}
