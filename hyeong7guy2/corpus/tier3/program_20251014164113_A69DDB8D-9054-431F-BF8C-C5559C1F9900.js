function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        try { a8(); } catch (e) {}
        String.prototype.slice(F0);
    }
    f6(f6, f6);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
const v16 = new F2();
const t14 = v16.constructor;
new t14();
