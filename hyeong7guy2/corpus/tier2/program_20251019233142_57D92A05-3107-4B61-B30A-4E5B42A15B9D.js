const v0 = class {
}
function f1() {
    function f2(a3, a4) {
        const v7 = new SharedArrayBuffer(7);
        const v9 = new DataView(v7);
        v9.setInt32(a3, a4, v0);
        return DataView;
    }
    const v11 = f2();
    const v12 = f2(f1, v11);
    %OptimizeMaglevOnNextCall(f2);
    return f2(v12, v11);
}
({ construct: f1 }).construct();
