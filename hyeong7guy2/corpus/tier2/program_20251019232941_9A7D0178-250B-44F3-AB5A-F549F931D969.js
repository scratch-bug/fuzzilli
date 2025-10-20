const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            typeof v1;
        }
        f7(a5);
        f7(f6);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v12 = new F2();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
