function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Map();
            Array(v8.set(F0, Map));
            return a2;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
