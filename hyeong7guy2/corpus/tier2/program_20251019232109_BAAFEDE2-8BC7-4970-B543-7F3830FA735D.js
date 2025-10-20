function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 257;
            for (let i9 = -30237; i9; ++i9) {
                for (let v13 = 0; v13 < 5; v13++) {
                    v7 ** 65535;
                    v7 = i9;
                }
            }
            return a6;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
