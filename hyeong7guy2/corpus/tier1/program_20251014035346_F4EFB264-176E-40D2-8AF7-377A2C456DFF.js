function f1(a2) {
    return 12234;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Symbol.toPrimitive;
F3[v7] = f1;
const v11 = {
    o(a9, a10) {
        super[F3] = 12234;
        return Symbol;
    },
};
Object.defineProperty(v11, 12234, { value: F3 });
v11.o(v7, v7);
