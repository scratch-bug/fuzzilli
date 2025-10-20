const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = a7 >>> a7;
            const t6 = v0.constructor;
            t6(f5, v8);
            return v8;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1(v0, F1);
class C12 {
    static [v11](a14, a15, a16) {
    }
    static [v11](a18, a19, a20) {
    }
}
