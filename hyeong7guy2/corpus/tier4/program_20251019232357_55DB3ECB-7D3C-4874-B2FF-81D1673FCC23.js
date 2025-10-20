function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = class {
            }
            class C16 extends v15 {
                n(a18, a19) {
                    "0OJT" < a18;
                }
            }
            const v21 = new C16();
            v21.n();
        }
        new F8();
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v26 = new F0();
new F0(v26, v26);
