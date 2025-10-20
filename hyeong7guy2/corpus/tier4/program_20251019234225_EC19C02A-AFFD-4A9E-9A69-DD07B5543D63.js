const v4 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
const v6 = new Uint8Array(v4);
const v7 = { ...v6 };
