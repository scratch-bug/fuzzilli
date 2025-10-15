const v4 = new SharedArrayBuffer(256, { maxByteLength: 536870888 });
const v6 = new BigUint64Array(v4);
const t2 = v6.constructor;
new t2(v6);
