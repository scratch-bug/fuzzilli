function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array(a3, 512, 512);
            const v10 = v9.length;
            const v11 = -v10;
            function f12(a13, a14, a15, a16) {
                return f5;
            }
            f12(v10, 512, v11);
            return v11;
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
