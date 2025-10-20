function f0(a1, a2) {
    const v4 = new Set();
    const v5 = v4.entries();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            a13.next(a11, a13);
            return a9;
        }
        f10(a9, v4, v5);
        %OptimizeFunctionOnNextCall(f10);
    }
    new F6();
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toPrimitive] = f0;
    function f23() {
        return F18;
    }
    f23.constructor(this);
}
new F18(Symbol, f0);
const v26 = new F18(Symbol, F18);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
