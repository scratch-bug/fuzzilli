const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            [typeof v1 === "object"];
        }
        f7(v1);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
