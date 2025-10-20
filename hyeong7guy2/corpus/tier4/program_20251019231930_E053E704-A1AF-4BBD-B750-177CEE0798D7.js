const v1 = new Set();
const v2 = v1.clear();
try { Temporal.PlainTime(v1, v2, v2); } catch (e) {}
