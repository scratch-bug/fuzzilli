function f2(a3) {
    const v5 = Intl.ListFormat;
    Object.defineProperty(v5, "toString", { writable: true, configurable: true, enumerable: true, value: v5 });
    const v7 = {};
    function f8() {
        return v5;
    }
    Object.defineProperty(v7, "type", { get: f8 });
    new v5("cv", v7);
    return 12234;
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
F10[Symbol.toPrimitive] = f2;
const v17 = {
    o(a15, a16) {
        super[F10] = 12234;
        return a16;
    },
};
try { v17.o(F10, v17); } catch (e) {}
