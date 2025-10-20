function f0() {
    function f1(a2, a3) {
        const v6 = new SharedArrayBuffer(7);
        const v8 = new DataView(v6);
        let v9;
        try { v9 = v8.getFloat64(7, a3); } catch (e) {}
        v9 >> v9;
        v8.getFloat32(v9);
        return f0;
    }
    f1();
    const v13 = f1(f0, f1);
    %OptimizeMaglevOnNextCall(f1);
    return f1(f1, v13);
}
const v15 = { construct: f0 };
v15.construct(v15, v15, f0);
