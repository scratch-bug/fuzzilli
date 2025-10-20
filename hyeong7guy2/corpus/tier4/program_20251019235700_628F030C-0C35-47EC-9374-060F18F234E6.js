const v4 = new ArrayBuffer(2, { maxByteLength: 200 });
const v6 = new Int8Array(v4);
v6.includes(NaN);
