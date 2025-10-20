const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = -9007199254740990 >> a3;
            v0.constructor.apply(a3, a3);
            return v9;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
class C13 {
    static [v12](a15, a16, a17) {
    }
    static [v12](a19, a20, a21) {
    }
}
