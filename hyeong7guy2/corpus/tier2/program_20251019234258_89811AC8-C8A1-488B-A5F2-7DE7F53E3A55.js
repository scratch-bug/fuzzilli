function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new BigInt64Array();
            function f12() {
                return 750;
            }
            f12.valueOf = f12;
            class C13 extends f12 {
            }
            function f14() {
            }
            f14.shared = 4096;
            f14.maximum = 2624;
            Object.defineProperty(f14, "initial", { value: C13 });
            const t16 = WebAssembly.Memory;
            const v17 = new t16(f14);
            v17.grow(v10);
            gc();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0(F0, F0);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
