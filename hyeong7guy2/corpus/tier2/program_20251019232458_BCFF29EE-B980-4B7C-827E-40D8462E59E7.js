const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = v0.constructor;
            const v10 = v8(f5, v8)[1];
            return v10.isArray(v10);
        }
        f6(f6(this));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1(F1, F1);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
