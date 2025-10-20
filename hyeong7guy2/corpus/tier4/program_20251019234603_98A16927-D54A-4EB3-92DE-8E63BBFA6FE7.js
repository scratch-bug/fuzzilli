function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        ("m")["endsWith"](a4, 0);
        return "m";
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v13 = new F1();
new F1(v13, 0);
new F1();
