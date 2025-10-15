function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try { a6.constructor(F0, f5, a6); } catch (e) {}
            return eval();
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0(F0, F0);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
