function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a15;
            }
            function f17(a18) {
                function f19(a20, a21, a22) {
                    const v23 = { 9: a13, [-5.0]: a22 };
                    return -1;
                }
                f19();
                f19();
                function F26(a28, a29) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f30(a31, a32, a33) {
                        function F34(a36, a37, a38, a39) {
                            if (!new.target) { throw 'must be called with new'; }
                            class C40 {
                            }
                        }
                        const v41 = new F34();
                        return v41;
                    }
                    f30();
                }
                new F26();
                new F26();
                new F26();
                return f19;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10();
        function F48(a50, a51, a52, a53) {
            if (!new.target) { throw 'must be called with new'; }
            function f54() {
                return a6;
            }
            function f55(a56) {
                function f58(a59) {
                }
                return ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(a50).map(f58);
            }
            Object.defineProperty(this, "e", { get: f54, set: f55 });
            this.e = -1;
        }
        new F48();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
