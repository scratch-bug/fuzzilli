const v2 = Intl.PluralRules;
const v3 = new v2();
try { v3.selectRange(10000, v2); } catch (e) {}
