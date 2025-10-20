function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer(a3, SharedArrayBuffer);
            function f11(a12, a13, a14, a15) {
                return arguments;
            }
            f11();
            const v19 = new DataView(v10);
            let v20;
            try { v20 = v19.getInt32(F0); } catch (e) {}
            function F21(a23) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v24 = new F21(v20);
            try { v19.getInt32(a3); } catch (e) {}
            function f26() {
                return v24;
            }
            return a6;
        }
        const v28 = f5(f5(f5, a3, F0), f5, this);
        %OptimizeMaglevOnNextCall(f5);
        f5(this, v28, F0);
        function f30(a31) {
        }
        return f30;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v32 = new F0(F0, F0);
class C33 {
    static [v32](a35, a36, a37) {
    }
}
