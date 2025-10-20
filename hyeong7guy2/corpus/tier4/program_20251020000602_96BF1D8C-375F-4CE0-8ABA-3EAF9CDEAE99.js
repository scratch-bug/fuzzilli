function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            const v10 = v8 % -4294967297;
            v10.set = v10;
            v8++;
        }
        return a6;
    }
    f4(this, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0(F0, F0);
const v14 = v13.constructor;
const v15 = new v14(F0, v14, v14);
new F0(v15, v15);
