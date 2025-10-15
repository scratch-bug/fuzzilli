function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            const v12 = v11.constructor;
            function f14() {
                return a2;
            }
            const v15 = class extends f14 {
                static {
                    function f17(a18, a19, a20) {
                        try {
                            const v21 = a18++;
                            v21 - v21;
                            Symbol.valueOf(v15);
                        } catch(e24) {
                            e24.message;
                        }
                        return f17;
                    }
                    const t24 = f17();
                    t24(f17, Symbol, f14);
                }
            }
            new v12();
        }
        f5(f5(F0));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
