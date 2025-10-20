function f0(a1) {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            a5[4];
            this.__proto__ = a4;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v12 = new F2(f0, f0);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
