Symbol.iterator;
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.length = this;
    const v9 = new a6(this, Float64Array);
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        function f14() {
            function f15(a16, a17, a18) {
                const v20 = new SharedArrayBuffer();
                const v22 = new DataView(v20);
                try { v22.getFloat64(); } catch (e) {}
            }
            %OptimizeMaglevOnNextCall(f15);
            f15(Float64Array, a12);
            function f25(a26) {
            }
            return f25;
        }
        Object.defineProperty(this, "toString", { get: f14 });
    }
    const v27 = new F10(Symbol, v9);
    class C28 {
        static [v27](a30, a31, a32) {
        }
    }
}
new F3(F3, F3);
