function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -1098098658;
        v8--;
        const v10 = v8 + v8;
        const v11 = v10 ** v10;
        const v12 = {};
        ~v11;
        eval();
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v18 = new F0();
const t17 = v18.constructor;
new t17();
