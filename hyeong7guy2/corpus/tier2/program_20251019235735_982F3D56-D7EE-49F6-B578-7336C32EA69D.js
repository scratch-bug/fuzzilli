function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
            }
            function f18(a19) {
                const v20 = {};
                function f21(a22, a23, a24) {
                    const v30 = {
                        toString(a26, a27) {
                            eval();
                        },
                    };
                }
                f21(f6, f21, f21(f21, f17, 2147483647));
                f21();
                f21();
                f21();
                f21();
                f21(2147483647);
                f21(a14);
                f21(170);
                Symbol.iterator;
                return a7;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
        }
        const v42 = new F11(this, F11, 170, a4);
        v42.e = v42;
        return a5;
    }
    f6(a4, a4, a5);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(170, 170);
new F2();
new F2();
