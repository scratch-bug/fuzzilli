const v2 = SharedArrayBuffer.prototype.slice;
try { v2.apply(); } catch (e) {}
