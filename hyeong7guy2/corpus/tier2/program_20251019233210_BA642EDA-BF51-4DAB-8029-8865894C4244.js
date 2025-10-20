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
                return F0;
            }
            f14.shared = 4096;
            f14.maximum = 2624;
            Object.defineProperty(f14, "initial", { value: C13 });
            try { WebAssembly.validate(); } catch (e) {}
            const t18 = WebAssembly.Memory;
            const v18 = new t18(f14);
            try { v18.grow(a2, v18, f5, a3, v18); } catch (e) {}
            v18.grow(v10);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
