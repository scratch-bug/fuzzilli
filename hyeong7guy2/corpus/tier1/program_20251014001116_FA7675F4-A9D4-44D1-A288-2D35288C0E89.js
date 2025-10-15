const v1 = new BigUint64Array();
const v2 = v1.copyWithin;
try { v2(BigUint64Array, BigUint64Array, BigUint64Array); } catch (e) {}
