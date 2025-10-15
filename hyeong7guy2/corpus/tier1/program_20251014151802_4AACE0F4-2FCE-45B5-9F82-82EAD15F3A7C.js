function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                construct(a16, a17) {
                    a17[4] = a11;
                    Date.__proto__ = a17;
                    return a17;
                },
            };
            function f20() {
                return f4;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21();
            v22.push(a11);
        }
        new F8(F0, this, a2, F8);
        return this;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v26 = new F0();
const v27 = new F0(F0, v26);
new F0(v27, F0);
