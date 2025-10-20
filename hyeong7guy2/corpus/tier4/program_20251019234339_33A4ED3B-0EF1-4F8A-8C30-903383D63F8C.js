function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = new SharedArrayBuffer(7);
        let v12;
        try { v12 = DataView.call(); } catch (e) {}
        const v13 = new DataView(v10);
        return v13.setFloat32(v12, v12);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
const v17 = new F0(v16, v16);
new F0(F0, v17);
