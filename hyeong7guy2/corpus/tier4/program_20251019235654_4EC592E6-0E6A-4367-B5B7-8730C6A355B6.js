const v1 = Intl.RelativeTimeFormat;
const v2 = new v1(v1);
const v3 = { __proto__: v2 };
try { v3.formatToParts(v2); } catch (e) {}
