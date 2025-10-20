const v1 = Symbol.iterator;
const v2 = {};
v2.length = v1;
const v5 = Array.prototype.indexOf;
try { v5.call(v2); } catch (e) {}
