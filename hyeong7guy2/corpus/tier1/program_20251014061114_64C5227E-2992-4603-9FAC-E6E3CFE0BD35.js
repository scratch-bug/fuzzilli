const v1 = new BigUint64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        const v11 = Symbol.dispose;
        const v13 = {
            [v11]() {
            },
        };
        using v14 = v13;
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22() {
                return f22;
            }
            class C24 extends Uint16Array {
            }
            class C25 extends C24 {
            }
            new C25();
            function f27(a28) {
                for (let i = 0; i < 5; i++) {
                    v1[0];
                }
                return f6;
            }
            Object.defineProperty(this, "e", { get: f22, set: f27 });
            this.e = -1;
        }
        new F16(a5, F2, F2, BigUint64Array);
        return a5;
    }
    f6(a5, F2, BigUint64Array);
    %OptimizeFunctionOnNextCall(f6);
}
const v33 = new F2();
const v34 = new F2(v1, v1);
new F2(v34, v33);
