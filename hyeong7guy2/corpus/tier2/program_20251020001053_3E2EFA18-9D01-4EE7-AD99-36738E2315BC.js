class C1 {
}
function f2(a3) {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F4[Symbol.toPrimitive] = f2;
const v11 = {
    o(a9, a10) {
        super[F4] = C1;
        return a10;
    },
};
const t14 = v11.o;
t14();
