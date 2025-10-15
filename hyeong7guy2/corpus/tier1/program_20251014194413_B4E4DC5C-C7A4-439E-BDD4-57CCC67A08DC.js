function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            ([f4,f4,f4])[4] | 7;
            const v11 = [65110,817624472,128,-2147483649,2];
            function f12() {
                return f5;
            }
            function f13(a14) {
                return this;
            }
            Object.defineProperty(v11, Symbol, { get: f12, set: f13 });
            v11[4] = v11;
        }
        f5(f4);
        f5(f5);
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
