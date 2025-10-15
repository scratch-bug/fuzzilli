const v3 = SharedArrayBuffer.prototype.slice;
try { v3.call(this); } catch (e) {}
