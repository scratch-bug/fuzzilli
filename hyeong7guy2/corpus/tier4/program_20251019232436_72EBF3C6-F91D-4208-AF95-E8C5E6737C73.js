const v3 = new BigUint64Array(10);
const v4 = v3.fill(-65537n);
try { v4.with(v4, v3); } catch (e) {}
