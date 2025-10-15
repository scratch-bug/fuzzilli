function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        try { a8.call(); } catch (e) {}
        return a8;
    }
    f7(a6);
    %OptimizeFunctionOnNextCall(f7);
}
const v13 = new F3(F3, F3);
const v14 = v13.constructor;
new v14(false, false);
const v16 = new v14(9, "9");
new F3(v16, 9);
