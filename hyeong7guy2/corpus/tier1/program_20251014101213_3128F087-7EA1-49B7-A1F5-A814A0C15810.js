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
            let v26;
            try { v26 = new C25(); } catch (e) {}
            function f27(a28) {
                function f30(a31, a32, a33) {
                    return a28;
                }
                f30(f30, f30, v26);
                for (let i = 0; i < 5; i++) {
                    v1[0];
                }
                return f27;
            }
            Object.defineProperty(this, "e", { get: f22, set: f27 });
            this.e = -1;
        }
        new F16();
        return this;
    }
    f6(a4, a5, F2);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(F2, BigUint64Array);
const v39 = new F2();
new F2(v39, v39);
