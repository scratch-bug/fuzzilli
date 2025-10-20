function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        Date["p" + 3969] = 3969;
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v18 = 0; v18 < 5; v18++) {
            }
        }
        new F14();
    }
    new F5();
    %OptimizeFunctionOnNextCall(F1);
}
const v21 = new F1();
new F1(v21, F1);
new F1();
