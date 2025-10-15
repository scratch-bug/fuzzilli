function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let i11 = 0; i11 < 100000; i11++) {
        }
        for (const v18 in [0]) {
        }
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = -1;
        }
        const v25 = new F19(this, f4, -1, F0);
        return v25;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0(F0, F0);
new F0(F0, v27);
new F0();
