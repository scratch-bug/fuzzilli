const v2 = Date.prototype.toISOString;
try { v2.call(Date); } catch (e) {}
