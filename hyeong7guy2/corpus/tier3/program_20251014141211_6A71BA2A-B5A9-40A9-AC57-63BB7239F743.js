const v4 = new ArrayBuffer(16, { maxByteLength: 536870889 });
const v6 = new Uint8Array(v4);
v6[6] = v6;
