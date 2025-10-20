function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v9 = new SharedArrayBuffer();
                const v11 = new DataView(v9);
                try { v11.setFloat64(v7); } catch (e) {}
            }
            return a6;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
for (let i23 = 0, i24 = 10; i24; i24--) {
}
