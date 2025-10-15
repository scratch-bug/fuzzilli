const v1 = Intl.NumberFormat;
const v2 = v1(v1, v1);
const v5 = new Proxy(v2, {});
try { v5.formatRangeToParts(); } catch (e) {}
