function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = DataView.prototype;
            let v11;
            try { v11 = v10.getInt8(f5, f5); } catch (e) {}
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                v11(this, a14, F12, a14, a6);
            }
            return f5;
        }
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
    static [v20](a27, a28, a29) {
    }
}
