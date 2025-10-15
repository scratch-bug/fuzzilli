const v0 = {};
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        const v15 = f13[4];
                        v15 | 7;
                        const v19 = { a: 1.1 };
                        with (v0) {
                        }
                        v15 - v19;
                    }
                    f13();
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                f12();
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v23 = new F8(f6, f6);
            class C24 {
                static [v23](a26, a27, a28) {
                }
            }
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1(v0, F1);
class C30 {
    static [v29](a32, a33, a34) {
    }
}
