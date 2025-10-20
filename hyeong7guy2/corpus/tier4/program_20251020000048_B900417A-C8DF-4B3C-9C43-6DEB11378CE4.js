const v4 = new SharedArrayBuffer(6, { maxByteLength: 6 });
const v6 = new Int16Array(v4);
v6.reverse();
