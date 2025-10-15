function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        class C11 {
            set a(a13) {
            }
            static [Float64Array](a15) {
            }
        }
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.toLocaleString(a19, F2, F2, 8, this); } catch (e) {}
        }
        const v23 = new F16(a8, F16, Float64Array, F2);
        try { v23.constructor(-1, -1, -1, 8); } catch (e) {}
        v23.constructor;
        return v23;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v27 = new F2(8, F2);
const v28 = v27.constructor;
const v29 = new v28(v27);
new F2(v29, v28);
