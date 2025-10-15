function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v16 = new Float32Array(this, a3, -1);
            v16.d *= 1.1356230574660949e+308;
            this.e = -1;
        }
        new F9(-1, f4, F0, a6);
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
