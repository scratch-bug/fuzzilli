function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                for (let v9 = 0; v9 < 5; v9++) {
                    const v12 = new SharedArrayBuffer(7);
                    const v14 = new DataView(v12);
                    v14.setInt8(a5, v9);
                }
                return a4;
            }
            f7(F0);
            f7();
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v18 = new F2();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0();
