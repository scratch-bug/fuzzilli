let v0 = 536870887;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                v0++;
                class C12 extends BigUint64Array {
                }
                const v13 = new C12();
                let v16 = ("p").codePointAt(Math.cbrt(v13));
                v16--;
                this.Float16Array;
                const v20 = {};
                function f21(a22, a23) {
                    return v16;
                }
                f21(v0);
            }
            const v25 = f8();
            v25 >> v25;
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                function f31() {
                    function f32(a33) {
                        class C34 {
                            static g;
                            static set g(a36) {
                            }
                        }
                        return f32;
                    }
                    return f32;
                }
                Object.defineProperty(this, "toString", { get: f31 });
            }
            const v37 = new F27(f5, F27);
            const v38 = v37.toString;
            v38(v38, v37);
            return this;
        }
        f6();
        f6(a3);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v42 = new F1(F1, F1);
v42.toString(v42);
