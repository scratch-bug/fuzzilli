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
                return f20;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21(f4);
            v22[0];
            const v24 = v22[0];
            v24.prototype = v24;
            v22.push();
        }
        const v26 = new F8();
        return v26;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
const v30 = new F0();
const t30 = v30.constructor;
new t30(v30, F0, v30);
