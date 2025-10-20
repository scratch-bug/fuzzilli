const v4 = new SharedArrayBuffer(10, { maxByteLength: 10 });
const v6 = new Float64Array(v4);
new Uint16Array(v6);
