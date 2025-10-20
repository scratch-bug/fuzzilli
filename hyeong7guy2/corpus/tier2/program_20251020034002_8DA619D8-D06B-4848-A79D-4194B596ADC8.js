function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
            }
            function f15(a16) {
                function f17(a18, a19, a20) {
                    const v26 = {
                        toString(a22, a23) {
                            eval();
                        },
                    };
                }
                f17();
                f17();
                f17();
                f17();
                f17();
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v32 = new F8();
        v32.e = v32;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
