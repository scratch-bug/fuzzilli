function f0() {
    function f1(a2, a3) {
        let v6;
        try { v6 = SharedArrayBuffer(a2); } catch (e) {}
        const v7 = new SharedArrayBuffer();
        const v9 = new DataView(v7);
        let v10;
        try { v10 = v9.setInt8(-2.220446049250313e-16, v6, v6); } catch (e) {}
        return v10;
    }
    f1(f0, f1);
    f1();
    %OptimizeMaglevOnNextCall(f1);
    f1(f1, f1);
    return f1;
}
({ construct: f0 }).construct();
