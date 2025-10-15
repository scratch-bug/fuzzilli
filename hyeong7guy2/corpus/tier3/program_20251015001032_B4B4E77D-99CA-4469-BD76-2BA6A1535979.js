const v0 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a8.every(v0, f5); } catch (e) {}
        return a6;
    }
    f5(f5, F1, f5(a4, f5, v0));
    %OptimizeFunctionOnNextCall(f5);
}
const v12 = new F1();
const t11 = v12.constructor;
new t11();
const t13 = v12.constructor;
new t13();
