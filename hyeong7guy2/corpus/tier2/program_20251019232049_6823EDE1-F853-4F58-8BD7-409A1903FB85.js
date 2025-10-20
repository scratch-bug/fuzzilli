function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return a8;
        }
        function f9() {
            const v10 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                a15[8] = Symbol;
            }
            new F12(Object, Uint32Array);
            new F12(v10, v10);
            return F12;
        }
        f9();
        %PrepareFunctionForOptimization(f9);
        %OptimizeFunctionOnNextCall(f9);
        f9();
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v22 = new F2();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
