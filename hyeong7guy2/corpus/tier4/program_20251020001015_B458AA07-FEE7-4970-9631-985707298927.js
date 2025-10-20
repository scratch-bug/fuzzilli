function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -1098098658;
        v8--;
        let v10 = v8 + v8;
        v10--;
        ~(v10 + v10);
        return eval();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
const v18 = v17.constructor;
new v18(v18, v18, F0);
new F0();
