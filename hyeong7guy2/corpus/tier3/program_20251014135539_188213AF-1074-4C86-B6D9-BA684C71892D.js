const v2 = new BigUint64Array(10);
const v4 = new Float32Array();
const v5 = v4.constructor;
try { v5.from(v2); } catch (e) {}
