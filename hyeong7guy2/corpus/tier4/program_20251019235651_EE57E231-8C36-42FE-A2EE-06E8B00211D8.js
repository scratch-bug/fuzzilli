const v4 = new SharedArrayBuffer(10, { maxByteLength: 4294967295 });
const v6 = new Uint16Array(v4);
v6.reverse();
