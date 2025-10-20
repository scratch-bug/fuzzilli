const v4 = new SharedArrayBuffer(1000, { maxByteLength: 1000 });
const v6 = new Uint8Array(v4);
new Uint16Array(v6);
