const v4 = new SharedArrayBuffer(10, { maxByteLength: 4294967295 });
const v6 = new Uint16Array(v4);
const v8 = new Float32Array();
const t3 = v8.constructor;
new t3(v6);
