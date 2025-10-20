Intl[Symbol.toPrimitive] = Symbol;
const v3 = Intl.PluralRules;
try {
    const v5 = {};
    v5.type = Intl;
    new v3("so", v5);
} catch(e7) {
}
