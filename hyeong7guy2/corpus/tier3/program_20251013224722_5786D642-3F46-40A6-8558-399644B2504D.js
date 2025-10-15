const v1 = Date.prototype;
const v2 = v1.setMinutes;
try { v2.call(v1, v1, v2, v1, v2); } catch (e) {}
