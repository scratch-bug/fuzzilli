function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = [];
            v8[11] = Infinity;
            return v8[4] && 7;
        }
        f6();
        f6(Infinity);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1(Infinity, F1);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
