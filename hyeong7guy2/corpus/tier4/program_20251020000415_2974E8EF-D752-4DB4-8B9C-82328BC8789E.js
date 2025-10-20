const v2 = Intl.PluralRules;
const v5 = new v2("smn", { maximumSignificantDigits: 1 });
v5.select(-1.0297335218331596e+308);
