const v3 = new SharedArrayBuffer(3);
const v4 = new Uint8Array(v3);
v4.sort();
const v8 = ArrayBuffer.prototype.resize;
try { v8.apply(); } catch (e) {}
