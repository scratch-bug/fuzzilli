function f0() {
    function f1(a2, a3) {
        const v5 = new SharedArrayBuffer();
        const v7 = new DataView(v5);
        try { v7.getFloat64(); } catch (e) {}
    }
    f1();
    f1();
    %OptimizeMaglevOnNextCall(f1);
    f1();
}
({ construct: f0 }).construct();
