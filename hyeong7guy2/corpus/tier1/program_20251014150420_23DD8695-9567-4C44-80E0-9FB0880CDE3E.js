function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                construct(a16, a17) {
                    Date.__proto__ = a17;
                    return a17;
                },
            };
            function f20() {
                return a6;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21(v21);
            v22.push(f20, v18, a2, F0, v22);
        }
        const v24 = new F8();
        const v25 = v24.constructor;
        new v25(v25, v25);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0(F0, F0);
new F0(v28, v28);
new F0(v28, v28);
new F0(v28, F0);
