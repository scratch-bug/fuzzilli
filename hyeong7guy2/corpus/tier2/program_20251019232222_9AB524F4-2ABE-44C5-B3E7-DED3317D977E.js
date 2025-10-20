function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer();
            const v12 = new DataView(v10);
            let v13;
            try { v13 = v12.getInt32(a3, v12); } catch (e) {}
            if (v13) {
            }
            return v10;
        }
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f15(a16) {
        }
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
