function f1(a2) {
    new Uint32Array(([-268435456,5,536870888]).flat(a2));
}
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
F7[Symbol.toPrimitive] = f1;
const v14 = {
    o(a12, a13) {
        super[F7] = a13;
        return a13;
    },
};
v14.o(f1, v14);
