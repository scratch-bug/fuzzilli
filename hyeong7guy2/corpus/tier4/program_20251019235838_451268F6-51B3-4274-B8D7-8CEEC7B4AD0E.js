function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
        const v9 = {};
        function f10(a11, a12) {
            const v15 = new SharedArrayBuffer(7);
            let v17;
            try { v17 = DataView.call(this); } catch (e) {}
            const v18 = new DataView(v15);
            v18.setFloat32(v17, v9);
            return 7;
        }
        f10(f10, f10);
        return this;
    }
    f4(F0, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
