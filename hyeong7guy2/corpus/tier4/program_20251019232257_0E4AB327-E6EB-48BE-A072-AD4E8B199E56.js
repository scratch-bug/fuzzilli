function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = new Uint8ClampedArray();
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                const v20 = v15.length;
                v20 / v20;
            }
            const v22 = new F16(a3, a2);
            const t12 = v22.constructor;
            new t12();
        }
        const v25 = new F8(a2, a2, a5, F0);
        return v25;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0(F0, F0);
new F0(v27, F0);
new F0();
