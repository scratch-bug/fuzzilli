const v2 = new BigUint64Array(5);
const v4 = globalThis.Float16Array;
try { v4.from(v2); } catch (e) {}
