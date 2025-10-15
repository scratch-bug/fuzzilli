const v1 = new Map();
const v2 = { __proto__: v1 };
try { v2.clear(); } catch (e) {}
