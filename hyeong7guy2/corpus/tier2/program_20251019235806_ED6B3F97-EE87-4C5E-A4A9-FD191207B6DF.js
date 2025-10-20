function f2(a3) {
    const v5 = Intl.ListFormat;
    const v7 = {};
    function f8(a9, a10) {
        return v5;
    }
    v7.toString = f8;
    v7.style = v7;
    new v5("cv", v7);
    return v5;
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
F12[Symbol.toPrimitive] = f2;
const v19 = {
    o(a17, a18) {
        super[F12] = 12234;
        return a17;
    },
};
try { v19.o(v19, v19); } catch (e) {}
