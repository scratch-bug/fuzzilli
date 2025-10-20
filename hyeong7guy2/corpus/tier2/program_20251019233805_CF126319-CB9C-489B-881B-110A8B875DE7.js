function f0() {
    function f1(a2, a3) {
        const v6 = new SharedArrayBuffer(7);
        const v8 = new DataView(v6);
        v8.setInt32(a2, a3);
        return DataView;
    }
    f1(f1, f0);
    f1(f1, f1);
    %OptimizeMaglevOnNextCall(f1);
    f1(f0, f0);
    return f0;
}
const v13 = { construct: f0 };
v13.construct();
v13.construct();
