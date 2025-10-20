const v2 = { maxByteLength: 536870888 };
let v3 = 256;
v3--;
const v5 = new SharedArrayBuffer(v3, v2);
const v7 = new BigUint64Array(v5);
const t5 = v7.constructor;
new t5(v7);
