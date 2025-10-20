function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            const v10 = v8 % 7;
            const v11 = v10 / v10;
            a6 >> v11;
            v8++;
            const v15 = v11 ^ 0.5511790586308696;
            v15 * v15;
        }
        return a6;
    }
    f4(a2, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
const v19 = v18.constructor;
const v20 = new v19(v18, v19, v19, F0, v18);
new F0(F0, v20);
