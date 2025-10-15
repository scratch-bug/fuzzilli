function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v9 = -1098098658;
        F0.b = this;
        let v10 = 30349n;
        ({"b":v10,"e":v9,...Int32Array} = F0);
        return Int32Array;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
