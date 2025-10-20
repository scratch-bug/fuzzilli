const v0 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            Object.getPrototypeOf(v0, a5);
            return a8;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v12 = new F2(v0, F2);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
