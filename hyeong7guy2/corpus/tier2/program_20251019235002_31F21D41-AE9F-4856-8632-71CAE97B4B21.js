function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = class extends Int8Array {
            }
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                function f13() {
                    function f14(a15) {
                        ("object").localeCompare("object", "object", v8);
                    }
                    %OptimizeMaglevOnNextCall(f14);
                    return f14;
                }
                Object.defineProperty(this, "toString", { get: f13 });
            }
            const v18 = new F9(F0, a6);
            class C19 {
                static [v18](a21, a22, a23) {
                }
            }
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
