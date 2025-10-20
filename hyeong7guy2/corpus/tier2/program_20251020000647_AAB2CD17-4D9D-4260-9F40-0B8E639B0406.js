function f0() {
    function f1(a2, a3) {
        let v6;
        try { v6 = SharedArrayBuffer(a3, SharedArrayBuffer); } catch (e) {}
        const v7 = new SharedArrayBuffer();
        const v9 = new DataView(v7);
        let v10;
        try { v10 = v9.setFloat64(-2.220446049250313e-16, v6, v6); } catch (e) {}
        return v10;
    }
    f1(f1, f1);
    %PrepareFunctionForOptimization(f1);
    %OptimizeMaglevOnNextCall(f1);
    return f1();
}
const v13 = { construct: f0 };
v13.construct(v13, v13, v13, v13, v13);
