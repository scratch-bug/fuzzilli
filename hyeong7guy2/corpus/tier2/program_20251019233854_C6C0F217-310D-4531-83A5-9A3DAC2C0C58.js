function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
            }
            function f17(a18) {
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F23(a25, a26, a27, a28) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f29() {
                        }
                        function f30(a31) {
                        }
                        Object.defineProperty(this, "e", { get: f29, set: f30 });
                    }
                    new F23();
                }
                const v33 = new F19();
                const t21 = v33.constructor;
                new t21();
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = this;
        }
        new F10();
    }
    f5();
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
