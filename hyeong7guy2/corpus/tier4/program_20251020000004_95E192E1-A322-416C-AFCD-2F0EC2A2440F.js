function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [536870912,256,127,4294967296];
        for (let v9 = 0; v9 < 5; v9++) {
            v8[v9] = v9;
        }
        return a2;
    }
    f4(a2, this, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
new F0(v11, v11);
new F0();
