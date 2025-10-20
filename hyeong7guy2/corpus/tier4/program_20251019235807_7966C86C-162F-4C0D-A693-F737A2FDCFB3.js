function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -1098098658;
        v8--;
        let v10 = v8 + v8;
        v10--;
        const v12 = v10 + v10;
        const v13 = {};
        ~v12;
        eval();
        return a3;
    }
    f4(F0, f4, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
const t17 = v18.constructor;
new t17(v18, v18, v18, v18, F0);
new F0();
