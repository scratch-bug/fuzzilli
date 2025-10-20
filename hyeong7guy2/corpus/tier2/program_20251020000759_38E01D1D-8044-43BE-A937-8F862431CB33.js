function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Uint32Array();
            function f9(a10) {
                const v11 = v8.length;
                const v12 = { month: v11 };
                return f5;
            }
            f9(f9);
            %PrepareFunctionForOptimization(f9);
            %OptimizeFunctionOnNextCall(f9);
            f9();
            for (let i17 = 0, i18 = 10; i18; i18--) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0(F0, F0);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
