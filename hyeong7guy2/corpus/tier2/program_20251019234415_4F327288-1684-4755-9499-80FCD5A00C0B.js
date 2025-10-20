function f2(a3) {
    const v5 = Intl.ListFormat;
    const v7 = {};
    function f8() {
        return v5;
    }
    Object.defineProperty(v7, "type", { get: f8 });
    new v5("cv", v7);
    return v7;
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
F10[Symbol.toPrimitive] = f2;
const v17 = {
    o(a15, a16) {
        super[F10] = 12234;
        return Symbol;
    },
};
try { v17.o(Symbol, 12234); } catch (e) {}
