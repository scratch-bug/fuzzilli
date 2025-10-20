const v4 = new SharedArrayBuffer(16, { maxByteLength: 2147483649 });
const v6 = new Float64Array(v4);
const t2 = v6.constructor;
new t2(v6);
