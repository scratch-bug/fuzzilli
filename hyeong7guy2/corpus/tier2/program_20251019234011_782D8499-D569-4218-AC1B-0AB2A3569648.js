function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
    }
    for (let v8 = 0; v8 < 5; v8++) {
        function f9() {
            C7[Symbol.asyncDispose] = undefined;
            return undefined;
        }
        f9();
        %OptimizeFunctionOnNextCall(f9);
    }
}
const v12 = new F0(F0, F0, F0);
new F0(v12, v12, F0);
new F0();
