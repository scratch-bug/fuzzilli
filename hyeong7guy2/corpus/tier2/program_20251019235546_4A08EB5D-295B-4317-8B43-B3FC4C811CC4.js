const v1 = [-9.479785356730005,-9.479785356730005];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.push({ a: -9.479785356730005 });
            this[4] | 7;
        }
        f7();
        f7(a4);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v16 = new F2();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
