const v2 = Date.prototype.toLocaleString;
try { v2.call(v2, Date, v2); } catch (e) {}
