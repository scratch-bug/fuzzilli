const v6 = new ArrayBuffer(127, { maxByteLength: 10000 });
const v7 = new Uint16Array(v6);
v7.indexOf(1073741824);
