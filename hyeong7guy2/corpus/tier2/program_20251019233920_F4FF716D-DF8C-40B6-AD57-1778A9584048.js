class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return a6;
    }
    Object.defineProperty(a4, "toString", { get: f7 });
}
new F1(C0, C0);
const v10 = Intl.PluralRules;
try {
    const v12 = {};
    v12.roundingPriority = C0;
    new v10("so", v12);
} catch(e14) {
}
