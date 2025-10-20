function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer();
            const v12 = new DataView(v10);
            let v13;
            try { v13 = v12.setUint8(); } catch (e) {}
            try { v12.getInt32(a6, v13); } catch (e) {}
            return SharedArrayBuffer;
        }
        %OptimizeMaglevOnNextCall(f5);
        f5(f4, f5, a3);
        function f16(a17) {
            return a2;
        }
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
