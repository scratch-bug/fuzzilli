function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [536870912,256,127,4294967296];
        v8[0] = v8;
        for (let v9 = 0; v9 < 5; v9++) {
            v8[v9] = v9;
        }
        return F0;
    }
    f4(a3, a2, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
