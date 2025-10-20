const v1 = new Map();
const v2 = v1.entries();
try { v2.drop(v2); } catch (e) {}
