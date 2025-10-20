const v1 = Intl.PluralRules;
try {
    new v1("so", { minimumIntegerDigits: 63620, type: "ordinal" });
} catch(e7) {
}
