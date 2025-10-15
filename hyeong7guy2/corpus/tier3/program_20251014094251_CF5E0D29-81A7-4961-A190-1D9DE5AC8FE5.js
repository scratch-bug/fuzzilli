function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            try {
                Array(1048576);
                function f14(a15, a16, a17) {
                    return a17;
                }
                new Worker(f14, { type: "function" });
                a10.indexOf();
            } catch(e23) {
            }
        }
        new Promise(f8);
        return F0;
    }
    f4(a2, a2, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0(F0, F0);
new F0();
new F0(v27, v27);
