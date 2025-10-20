const v2 = Intl.NumberFormat;
const v3 = v2();
v3.valueOf = v2;
try { v3.formatRangeToParts("-4294967297", v3); } catch (e) {}
