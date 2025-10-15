function f2(a3) {
    return 12234;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Symbol.toPrimitive;
F4[v7] = f2;
const v11 = {
    o(a9, a10) {
        super[F4] = a10;
        return 12234;
    },
};
function f12(a13) {
    return v7;
}
Object.defineProperty(v11, 12234, { configurable: true, set: f12 });
v11.o();
