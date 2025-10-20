function f2(a3) {
    const v5 = Intl.ListFormat;
    const v7 = {};
    v7.localeMatcher = v5;
    new v5("cv", v7);
    return f2;
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
F9[Symbol.toPrimitive] = f2;
const v16 = {
    o(a14, a15) {
        super[F9] = 12234;
        return a15;
    },
};
try { v16.o(); } catch (e) {}
