const v1 = Intl.NumberFormat;
const v2 = v1();
const v3 = { __proto__: v2 };
try { v3.resolvedOptions(v3, v1); } catch (e) {}
