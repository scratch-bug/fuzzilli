const v1 = Symbol.iterator;
function f3(a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v12 = class extends this {
                }
                return v1;
            }
            f10.call(a7);
            return f10;
        }
        try { f9.apply(); } catch (e) {}
    }
    new F5(v1);
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 0, i22 = 10; i22; i22--) {
}
F16[Symbol.toPrimitive] = f3;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return a30;
    },
};
v32.o();
