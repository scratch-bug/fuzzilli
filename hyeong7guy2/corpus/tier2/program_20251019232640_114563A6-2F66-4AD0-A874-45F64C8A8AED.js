function f0() {
    function f1(a2, a3) {
        const v6 = new SharedArrayBuffer(7);
        const v8 = new DataView(v6);
        let v9;
        try { v9 = v8.getFloat64(7, f1); } catch (e) {}
        f1 >> v9;
        v8.getFloat32(v9);
        return f1;
    }
    f1(f1, f1);
    f1(f1, f0);
    %OptimizeMaglevOnNextCall(f1);
    return f1();
}
({ construct: f0 }).construct();
