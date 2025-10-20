const v4 = new ArrayBuffer(127, { maxByteLength: 127 });
const v6 = new Uint16Array(v4);
v6.lastIndexOf(v6, 127);
