function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12, a13, a14) {
                const v16 = new SharedArrayBuffer();
                const v18 = new DataView(v16);
                try { v18.setInt8(); } catch (e) {}
                return SharedArrayBuffer;
            }
            %OptimizeMaglevOnNextCall(f11);
            f11(a9, a9, F0);
            function f21(a22) {
            }
            return f21;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v23 = new F6();
    class C24 {
        static [v23](a26, a27, a28) {
        }
        static [v23](a30, a31, a32) {
        }
    }
}
new F0(F0, F0, F0, F0);
