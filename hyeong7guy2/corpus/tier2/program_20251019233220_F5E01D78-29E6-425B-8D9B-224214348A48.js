function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            function f14(a15, a16, a17) {
                a17.construct = BigInt64Array;
                const v22 = {
                    construct(a19, a20) {
                        a19.construct;
                        return F0;
                    },
                };
                v22.construct(a17);
                return a7;
            }
            f14(f14, 11, Int8Array);
            return a2;
        }
        new Promise(f8);
        return a2;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0();
new F0(F0, v28);
new F0();
