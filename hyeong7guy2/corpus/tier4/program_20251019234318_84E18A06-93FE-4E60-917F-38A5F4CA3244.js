const v4 = new SharedArrayBuffer(10, { maxByteLength: 196 });
const v6 = new Uint16Array(v4);
const t2 = v6.constructor;
new t2(v6);
