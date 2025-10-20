function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -762615.9332658274;
        v8--;
        (`string`).codePointAt(v8);
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const v14 = new F0();
new F0(v14, v13);
