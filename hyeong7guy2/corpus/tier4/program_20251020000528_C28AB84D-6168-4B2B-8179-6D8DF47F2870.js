const v5 = new SharedArrayBuffer(2, { maxByteLength: 2 });
const v6 = new Int16Array(v5);
const t2 = v6.constructor;
new t2(v6);
