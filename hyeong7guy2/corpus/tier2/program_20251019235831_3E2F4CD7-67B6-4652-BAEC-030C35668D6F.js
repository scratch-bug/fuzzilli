function f2() {
}
Array();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12, a13, a14) {
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22() {
            }
            function f23(a24) {
                function f25(a26, a27, a28) {
                    const v29 = { 9: a19, [-5.0]: a28 };
                }
                f25();
                f25(a14, a20, a21);
                f25(f25(a24, f22, F7), this, a12);
                class C34 {
                }
                const v36 = {};
                const v37 = new Proxy(C34, v36);
                function F38(a40, a41) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f42(a43, a44, a45) {
                        function F46(a48, a49, a50, a51) {
                            if (!new.target) { throw 'must be called with new'; }
                            function F52(a54, a55) {
                                if (!new.target) { throw 'must be called with new'; }
                                a54[1] = a54;
                            }
                            new F52(v37);
                        }
                        new F46();
                    }
                    f42(a41, this, Proxy);
                }
                const v59 = new F38();
                const v60 = new F38(v59, F38);
                new F38(v60, v36);
                f25();
            }
            Object.defineProperty(this, "e", { get: f22, set: f23 });
            this.e = -1;
        }
        new F16();
    }
    f11(-5.0, F7, F7);
    %OptimizeFunctionOnNextCall(f11);
}
new F7(-5.0, F7);
new F7();
new F7();
