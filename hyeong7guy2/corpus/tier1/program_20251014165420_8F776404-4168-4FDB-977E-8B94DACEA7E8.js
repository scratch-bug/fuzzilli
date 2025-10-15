function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float64Array(227);
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14, a15) {
            function F17(a19, a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                function f23() {
                    return F0;
                }
                function f24(a25) {
                    v7[3943] = a10;
                    return a25;
                }
                Object.defineProperty(this, "e", { get: f23, set: f24 });
                this.e = -1;
            }
            new F17(F0, F0, a15, F0);
            return F0;
        }
        f12(a4, a11, F0);
        %OptimizeFunctionOnNextCall(f12);
    }
    new F8(a4, 227);
    new F8();
}
const v30 = new F0();
new F0(v30, F0, v30);
