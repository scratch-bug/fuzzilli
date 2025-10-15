function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v19 = {
                construct(a17, a18) {
                    Date.__proto__ = a18;
                    return a18;
                },
            };
            function f21() {
                return a2;
            }
            const v22 = new Proxy(f21, v19);
            const v23 = new v22(f4);
            v23.push(Symbol, Date);
        }
        const v25 = new F8();
        return v25;
    }
    f4(a2, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0(F0, F0);
new F0(F0, v27);
new F0(F0, v27);
