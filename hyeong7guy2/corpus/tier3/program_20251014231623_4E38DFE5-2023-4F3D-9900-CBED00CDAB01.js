const v4 = new SharedArrayBuffer(127, { maxByteLength: 127 });
const v6 = new Uint8Array(v4);
Int32Array.from(v6);
