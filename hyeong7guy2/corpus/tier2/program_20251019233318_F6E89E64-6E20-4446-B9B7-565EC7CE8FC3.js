function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer(a6, this);
            const v12 = new DataView(v10);
            try { v12.getInt32(F0); } catch (e) {}
            try { v12.getInt32(a3); } catch (e) {}
            return SharedArrayBuffer;
        }
        f5(f5, a2, F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f18(a19) {
        }
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0(F0, F0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
