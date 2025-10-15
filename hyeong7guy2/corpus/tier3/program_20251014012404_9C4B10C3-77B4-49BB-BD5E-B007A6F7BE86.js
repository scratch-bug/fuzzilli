const v1 = Intl.RelativeTimeFormat;
try { v1.call(); } catch (e) {}
const v3 = new v1();
v3.resolvedOptions();
