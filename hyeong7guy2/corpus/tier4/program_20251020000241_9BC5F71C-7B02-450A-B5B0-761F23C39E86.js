function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        "" + 3969;
    }
    new F5();
    %OptimizeFunctionOnNextCall(F1);
}
new F1(3969, 3969);
new F1(3969, 3969);
new F1();
