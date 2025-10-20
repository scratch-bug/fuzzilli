function f0(a1, a2) {
    const v4 = new Set();
    const v5 = v4.entries();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            return a13.next();
        }
        try { f10(); } catch (e) {}
        f10(a9, v4, v5);
        %OptimizeFunctionOnNextCall(f10);
    }
    new F6();
}
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toPrimitive] = f0;
    function f24() {
        return f24;
    }
    f24.constructor(this);
}
new F19(F19, F19);
const v27 = new F19();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
