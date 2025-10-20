function f0() {
    function f1(a2, a3) {
        const v6 = new SharedArrayBuffer();
        const v8 = new DataView(v6);
        let v9;
        try { v9 = v8.getInt32(7, f1); } catch (e) {}
        f1 >> v9;
        return f1;
    }
    f1();
    const v12 = f1(f0, f0);
    %OptimizeMaglevOnNextCall(f1);
    f1();
    return v12;
}
const v14 = { construct: f0 };
v14.construct(f0, f0, v14, v14);
