const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10) {
                return F1;
            }
            const v12 = ++f5 * v0;
            f8(f5);
            return v12;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(F1, F1);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
