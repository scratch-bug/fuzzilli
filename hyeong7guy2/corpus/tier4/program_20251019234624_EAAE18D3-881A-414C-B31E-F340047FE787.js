function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a8(a8, a6, a7, a4); } catch (e) {}
        try { String.fromCodePoint("function"); } catch (e) {}
        try { String.fromCodePoint(a6); } catch (e) {}
        return String;
    }
    f5();
    f5(F1, a3, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v15 = new F1(F1);
const t13 = v15.constructor;
new t13();
for (let i20 = 0, i21 = 10; i21; i21--) {
}
