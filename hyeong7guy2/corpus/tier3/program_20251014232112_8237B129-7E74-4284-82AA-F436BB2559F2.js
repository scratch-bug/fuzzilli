const v4 = new ArrayBuffer(2, { maxByteLength: 4085 });
const v6 = new Int8Array(v4);
const v8 = new Uint16Array();
try { v8.sort(v6); } catch (e) {}
