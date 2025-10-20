function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 5; v9++) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15(a16, a17, a18) {
                    Promise.resolve();
                    return this;
                }
                f15.call();
                %OptimizeFunctionOnNextCall(f15);
            }
            new F11();
            const v23 = v9 % -1298641096;
            new ArrayBuffer(a7, a7);
            v23 ? -1298641096 : v8;
        }
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0(F0, F0);
const t25 = v28.constructor;
const v30 = new t25();
new F0(v30, v28);
