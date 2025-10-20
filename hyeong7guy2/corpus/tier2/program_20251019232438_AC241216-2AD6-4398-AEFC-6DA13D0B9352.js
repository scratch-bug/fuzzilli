function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Float32Array(2439);
            v9[1096];
            const v11 = class {
            }
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function F18(a20, a21, a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F18(v11);
            }
            const v27 = new Uint32Array(this, 2439, 2439);
            const v29 = new WeakSet();
            const v30 = class {
                set e(a32) {
                    function F33(a35, a36) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F33(v29);
                }
            }
            const v38 = new v30();
            class C39 extends v30 {
                toString(a41, a42, a43, a44) {
                    v30.m(a41, v38);
                }
            }
            function F46(a48, a49) {
                if (!new.target) { throw 'must be called with new'; }
                v27[2] &= 9007199254740992;
            }
            const v50 = [268435439,-9223372036854775807,-1953415435,10000,-268435456,-65537,-128,-1525227024];
            function F51(a53, a54) {
                if (!new.target) { throw 'must be called with new'; }
                const t38 = "2147483647";
                t38.b = v50;
            }
            v9[1096];
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v57 = new F1();
class C58 {
    static [v57](a60, a61, a62) {
    }
    static [v57](a64, a65, a66) {
    }
}
