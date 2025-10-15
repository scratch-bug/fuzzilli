function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = {
                construct(a15, a16) {
                    return a15;
                },
            };
            function f19() {
                return this;
            }
            const v20 = new Proxy(f19, v17);
            v20(v20, this, F8);
        }
        const v22 = new F8(a2, f4, this, F0);
        const v23 = v22.constructor;
        new v23(v23);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v26 = new F0();
new F0(F0, v26);
new F0();
