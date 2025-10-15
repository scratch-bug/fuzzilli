const v4 = new SharedArrayBuffer(3.3, { maxByteLength: 4294967296 });
const v6 = new Uint8Array(v4);
v6.fill();
