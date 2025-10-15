const v2 = Intl.PluralRules;
const v6 = {
    minimumFractionDigits: 14,
    minimumIntegerDigits: 14,
    minimumSignificantDigits: 14,
    roundingMode: "floor",
    roundingPriority: "lessPrecision",
};
const v7 = new v2("kab", v6);
v7.resolvedOptions();
