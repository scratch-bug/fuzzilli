function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        return +"0x";
    }
    f4(F0, f4, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
