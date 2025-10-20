function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            f5[4] | 7;
            const v11 = [65110,817624472,128,-2147483649,2];
            function f12() {
                return a7;
            }
            class C13 {
            }
            const v15 = new SharedArrayBuffer();
            const v17 = new DataView(v15);
            try { v17.setInt8(7, 7); } catch (e) {}
            function f19(a20) {
                return f6;
            }
            Object.defineProperty(v11, Symbol, { get: f12, set: f19 });
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1(F1, Symbol);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
