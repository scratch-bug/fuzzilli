function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = { ...0 };
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14() {
                    function f15(a16) {
                        const v18 = d8.getExtrasBindingObject();
                        v18.getContinuationPreservedEmbedderData();
                        v18.g = v18;
                        v18.getContinuationPreservedEmbedderData();
                    }
                    f15();
                    f15();
                    %OptimizeMaglevOnNextCall(f15);
                    return f15;
                }
                Object.defineProperty(this, "toString", { get: f14 });
            }
            const v23 = new F10();
            const t22 = v23.toString;
            t22();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
for (let i34 = 0, i35 = 10; i35; i35--) {
}
