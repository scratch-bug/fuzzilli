[128,268435441,536870887];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function f11(a12, a13) {
            function f14(a15, a16) {
                for (let v17 = 0; v17 < 5; v17++) {
                }
            }
            return f14;
        }
        Symbol.toString = f11;
        function F19(a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f23() {
                function f24(a25) {
                    const v26 = `string${536870912n}undefined`;
                    const t17 = Symbol.toString();
                    t17(Symbol, f23, v26);
                }
                f24();
                return f24;
            }
            Object.defineProperty(this, "toString", { get: f23 });
        }
        const v30 = new F19();
        v30.toString();
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
new F3();
new F3();
