function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                let v12 = -2.220446049250313e-16;
                v12++;
                const v15 = new SharedArrayBuffer(a3, this);
                const v17 = new DataView(v15);
                try { v17.setFloat64(v12); } catch (e) {}
                return v12;
            }
            ({ construct: f11 }).construct();
        }
        const v21 = new F8();
        return v21;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
