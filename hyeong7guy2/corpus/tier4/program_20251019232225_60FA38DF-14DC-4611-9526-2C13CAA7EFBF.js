function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -59333;
        while (v8 <= 2) {
            v8++;
        }
        return this;
    }
    f4(F0, F0, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const v14 = v13.constructor;
new v14();
new F0(v14, F0);
