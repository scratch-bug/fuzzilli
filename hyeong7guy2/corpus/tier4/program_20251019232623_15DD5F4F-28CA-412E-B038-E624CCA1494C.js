const v1 = Intl.RelativeTimeFormat;
const v2 = new v1(Intl, v1);
const v3 = { __proto__: v2 };
try { v3.format(); } catch (e) {}
