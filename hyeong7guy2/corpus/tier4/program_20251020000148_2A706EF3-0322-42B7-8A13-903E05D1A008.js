function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v5 = class extends F2 {
        constructor(a7, a8) {
            super();
            function f9(a10, a11) {
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f16(a17) {
                    const v20 = new Uint32Array(24084);
                    function f21(a22) {
                        let v23 = v20[2];
                        v23--;
                        const v26 = eval(a17);
                        v26 ?? v26;
                        return v23;
                    }
                    f21();
                    f21();
                    return this;
                }
                F12.constructor = f16;
                const v30 = F12.constructor;
                v30(f9, a10);
                return v30;
            }
            f9();
            %PrepareFunctionForOptimization(f9);
            %OptimizeMaglevOnNextCall(f9);
            f9(F2, a7);
        }
    }
    new v5(F2, F2);
}
new F0();
