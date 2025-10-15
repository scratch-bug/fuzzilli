function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            class C9 {
            }
            Object[85] **= -4294967297;
            v8 | 7;
            v7.with(v8, f5);
        }
        f5(f5(a2));
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
