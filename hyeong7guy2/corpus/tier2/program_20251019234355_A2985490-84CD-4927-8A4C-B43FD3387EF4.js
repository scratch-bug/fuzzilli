function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer(a6, SharedArrayBuffer);
            const v12 = new DataView(v10);
            try { v12.getInt32(); } catch (e) {}
            function F14(a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v17 = new F14();
            try { v12.getInt32(a3); } catch (e) {}
            function f19() {
                return v17;
            }
            return f5;
        }
        const v20 = f5(f5, f5, f5);
        f5(F0, v20, v20);
        %OptimizeMaglevOnNextCall(f5);
        f5(a2, f5, f5);
        function f23(a24) {
            return a24;
        }
        return f23;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
