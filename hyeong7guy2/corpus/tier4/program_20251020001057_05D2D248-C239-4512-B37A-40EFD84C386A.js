const v2 = Intl.PluralRules;
const v6 = new v2("smn", { maximumSignificantDigits: 1, roundingMode: "halfEven" });
v6.resolvedOptions();
