const v2 = Intl.PluralRules;
try {
    const v4 = {};
    v4[Symbol.toPrimitive] = Symbol;
    v4.roundingMode = v4;
    new v2("so", v4);
} catch(e7) {
}
