function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    new a4(this, Float64Array);
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            function f13(a14, a15, a16) {
                const v18 = new SharedArrayBuffer(a6, a5);
                const v20 = new DataView(v18);
                try { v20.getFloat64(a14); } catch (e) {}
                return a3;
            }
            %OptimizeMaglevOnNextCall(f13);
            f13();
            function f23(a24) {
            }
            return f23;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v25 = new F8(F1, a4);
    class C26 {
        static [v25](a28, a29, a30) {
        }
    }
}
new F1(F1, F1);
