function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = new Uint32Array(4294967296);
            function f10(a11) {
                v9[2];
                return 4294967296;
            }
            f10(f5);
            return f10();
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
