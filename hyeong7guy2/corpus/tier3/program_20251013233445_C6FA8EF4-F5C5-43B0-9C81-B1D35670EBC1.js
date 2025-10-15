const v1 = ArrayBuffer.prototype;
const v2 = v1.resize;
try { v2.call(v2, v1); } catch (e) {}
