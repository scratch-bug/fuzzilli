function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            typeof null;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v9 = new F0(F0, F0);
v9.toString(v9, F0, v9, v9);
class C11 {
    static [v9](a13, a14, a15) {
    }
}
