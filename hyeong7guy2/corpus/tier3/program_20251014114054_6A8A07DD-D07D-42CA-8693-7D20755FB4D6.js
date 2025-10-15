const v1 = Intl.DateTimeFormat;
const v2 = v1(Intl, v1);
const v3 = v2.formatRange;
try { v3(v2, v2); } catch (e) {}
