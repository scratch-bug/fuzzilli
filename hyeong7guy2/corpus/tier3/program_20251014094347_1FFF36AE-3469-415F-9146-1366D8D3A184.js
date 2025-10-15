const v1 = new Set();
const v3 = v1.keys.call(v1);
try { v3.drop(v3); } catch (e) {}
