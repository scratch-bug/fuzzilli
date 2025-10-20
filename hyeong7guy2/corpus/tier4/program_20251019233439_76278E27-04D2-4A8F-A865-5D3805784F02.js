function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = Date.prototype.getTime;
        try { v10(); } catch (e) {}
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
