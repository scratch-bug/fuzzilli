function f1(a2) {
    new Uint32Array(([9007199254740992,65524,559500141]).flat(a2));
}
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
F7[Symbol.toPrimitive] = f1;
const v14 = {
    o(a12, a13) {
        super[F7] = a13;
        return a12;
    },
};
v14.o(v14, v14);
