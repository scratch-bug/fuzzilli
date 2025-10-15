const v1 = Intl.DateTimeFormat;
const v2 = v1();
try { v2.formatRange(v2, v1); } catch (e) {}
