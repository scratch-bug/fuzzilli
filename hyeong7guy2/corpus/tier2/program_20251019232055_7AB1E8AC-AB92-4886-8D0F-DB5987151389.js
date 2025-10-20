function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = Array();
            try { DataView.apply(v4, v9); } catch (e) {}
            return a3;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i18 = 0, i19 = 10; i19; i19--) {
}
F13[Symbol.toPrimitive] = f2;
const v29 = {
    o(a27, a28) {
        super[F13] = 12234;
        return a27;
    },
};
v29.o();
