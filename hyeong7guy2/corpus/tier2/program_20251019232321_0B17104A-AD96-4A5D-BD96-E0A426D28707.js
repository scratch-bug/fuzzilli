function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    a2.g = a2;
    function f4() {
        function f5(a6) {
            for (const v7 in a3) {
                v7 <= v7;
            }
        }
        f5(this);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0(F0, F0);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
