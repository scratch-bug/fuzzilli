const v4 = new ArrayBuffer(512, { maxByteLength: 512 });
const v7 = SharedArrayBuffer.prototype.grow;
try { v7.call(v4); } catch (e) {}
