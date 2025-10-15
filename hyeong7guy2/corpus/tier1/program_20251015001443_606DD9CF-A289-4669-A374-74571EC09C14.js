function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Date();
            v9.getTime();
            return a7;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1(-1.3629085055889263, F1);
class C12 {
    static [v11](a14, a15, a16) {
    }
    static [v11](a18, a19, a20) {
    }
}
