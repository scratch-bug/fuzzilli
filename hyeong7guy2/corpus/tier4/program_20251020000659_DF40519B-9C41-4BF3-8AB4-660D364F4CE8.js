const v1 = Object.prototype;
const v2 = v1.constructor;
const v3 = v2.freeze(v1);
try { v3.__defineSetter__(v1, v2); } catch (e) {}
