function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v19 = Intl.DisplayNames;
            try { v19.apply(Int32Array, Object); } catch (e) {}
            const v21 = new SharedArrayBuffer(7);
            function f25() {
                return f25;
            }
            f25.apply(4, arguments);
            const v27 = new DataView(v21);
            v27.setFloat32();
        }
        const v29 = new F8(a6, f4, F0, F8);
        const t16 = v29.constructor;
        new t16(v29, a5, a2, v29);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v33 = new F0(F0, F0);
const v34 = v33.constructor;
new v34(v34, v34);
new F0();
