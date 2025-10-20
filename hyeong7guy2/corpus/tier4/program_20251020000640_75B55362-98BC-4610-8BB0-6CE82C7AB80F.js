const v1 = Intl.NumberFormat;
const v2 = v1(v1, Intl);
const v3 = {};
v3.getPrototypeOf = v3;
const v5 = new Proxy(v2, v3);
try { v5.resolvedOptions(v3, v3, Intl, v5, v5); } catch (e) {}
