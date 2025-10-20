function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8();
            const v13 = v12.constructor;
            function f14() {
                return f5;
            }
            const v15 = class extends f14 {
                static {
                    function f17(a18, a19, a20) {
                        async function f21(a22, a23) {
                            try { a23(); } catch (e) {}
                            for (let i27 = 0, i28 = 10; i28; i28--) {
                            }
                            await f21;
                            return a19;
                        }
                        f21();
                        const v36 = a18++;
                        v36 - v36;
                        return f17;
                    }
                    const t27 = f17();
                    t27(f17, Symbol, f14);
                }
            }
            new v13(v13);
        }
        f6(F1);
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v43 = new F1(F1, Symbol);
class C44 {
    static [v43](a46, a47, a48) {
    }
}
