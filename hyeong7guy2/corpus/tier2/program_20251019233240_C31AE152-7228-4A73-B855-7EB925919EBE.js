function f0() {
    function f1(a2, a3) {
        const v5 = new SharedArrayBuffer(a3, SharedArrayBuffer);
        const v7 = new DataView(v5);
        let v8;
        try { v8 = v7.getFloat64(a2); } catch (e) {}
        v8 >> v8;
        return v7;
    }
    const v10 = f1();
    f1(v10, v10);
    %OptimizeMaglevOnNextCall(f1);
    f1();
    return v10;
}
({ construct: f0 }).construct();
