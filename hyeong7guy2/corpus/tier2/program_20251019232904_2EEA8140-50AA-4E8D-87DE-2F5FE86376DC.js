class C1 extends Uint32Array {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
        }
        function f10() {
            const v11 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
            function F13(a15, a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                a16[8] = Symbol;
                a17.e = this;
            }
            const v19 = new F13(Object, Uint32Array, Uint32Array);
            new F13(v11, v11, v11);
            return v19;
        }
        f10();
        %PrepareFunctionForOptimization(f10);
        %OptimizeFunctionOnNextCall(f10);
        f10();
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v23 = new F3();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
