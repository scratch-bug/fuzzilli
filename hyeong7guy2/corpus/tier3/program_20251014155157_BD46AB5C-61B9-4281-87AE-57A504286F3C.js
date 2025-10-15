function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return a5;
    }
    f4() == "function";
    %OptimizeFunctionOnNextCall(a3);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
