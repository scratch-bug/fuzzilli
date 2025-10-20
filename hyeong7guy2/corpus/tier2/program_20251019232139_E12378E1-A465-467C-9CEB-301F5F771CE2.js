function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8();
            v12.constructor;
            function f15() {
                return f6;
            }
            const v16 = class extends f15 {
                static {
                    function f18(a19, a20, a21) {
                        try {
                            a19++;
                            Symbol.valueOf(v16);
                        } catch(e24) {
                            e24.message;
                        }
                        return Symbol;
                    }
                    f18(26186n);
                }
            }
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1(F1, 26186n);
class C30 {
    static [v29](a32, a33, a34) {
    }
}
