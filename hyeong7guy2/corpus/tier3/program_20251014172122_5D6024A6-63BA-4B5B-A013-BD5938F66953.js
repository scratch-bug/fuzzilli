function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                const v18 = class {
                    static {
                        let {...v20} = this;
                    }
                }
            }
            new F14();
        }
        const v22 = new F8(F8, F0, F8, F0);
        return v22;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v25 = new F0(F0, F0);
new F0(F0, v25);
