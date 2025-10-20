function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9() {
            return F0;
        }
        Object.defineProperty(Promise, "then", { configurable: true, enumerable: true, get: f9 });
        Promise.resolve();
        return Promise;
    }
    f4.call(f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
const v13 = v12.constructor;
new v13(v12, F0, v13, v12);
const v15 = v12.constructor;
new v15(v15, v15, F0, v15, F0);
