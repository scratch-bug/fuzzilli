const v4 = new SharedArrayBuffer(255, { maxByteLength: 1000 });
const v6 = new Uint8Array(v4);
const t2 = v6.constructor;
new t2(v6);
