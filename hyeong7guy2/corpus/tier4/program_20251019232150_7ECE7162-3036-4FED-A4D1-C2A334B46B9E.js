const v2 = Date.prototype.setUTCSeconds;
try { v2.call(); } catch (e) {}
