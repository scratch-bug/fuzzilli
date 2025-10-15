const v1 = [127,127];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = v1.constructor;
            v9(a8).forEach(v9);
        }
        f7(127);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v14 = new F2();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
