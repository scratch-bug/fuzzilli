const v1 = Intl.PluralRules;
const v5 = new v1("kab", { roundingPriority: "lessPrecision" });
v5.select();
