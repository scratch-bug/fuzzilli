const v1 = Intl.PluralRules;
const v2 = new v1(v1);
const v3 = v2.resolvedOptions;
try { v3(); } catch (e) {}
