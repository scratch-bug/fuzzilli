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
            const v27 = new Uint32Array();
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                v27[2] &= 9007199254740992;
            }
            const v32 = [268435439,-9223372036854775807,-1953415435,10000,-268435456,-65537,-128,-1525227024];
            function F33(a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                const t23 = "2147483647";
                t23.b = v32;
            }
            v9[1096];
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v39 = new F1(Float32Array, F1);
class C40 {
    static [v39](a42, a43, a44) {
    }
    static [v39](a46, a47, a48) {
    }
}
