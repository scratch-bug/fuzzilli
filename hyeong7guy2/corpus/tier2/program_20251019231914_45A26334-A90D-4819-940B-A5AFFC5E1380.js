function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        class C7 {
        }
        function f8() {
            return C7;
        }
        Object.defineProperty(C7, "toReversed", { enumerable: true, get: f8 });
        `toReversed` in C7;
        return F0;
    }
    f4(a2, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0();
const v13 = new F0(F0, F0);
new F0(v12, v13);
