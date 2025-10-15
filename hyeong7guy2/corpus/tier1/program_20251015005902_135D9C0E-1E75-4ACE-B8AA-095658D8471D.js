function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Intl.PluralRules;
try {
    const v9 = {};
    Object.defineProperty(v9, "maximumSignificantDigits", { configurable: true, enumerable: true, get: F0 });
    new v7("so", v9);
} catch(e11) {
}
