function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f13(a14) {
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20, a21, a22) {
                    function F24(a26, a27, a28, a29) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f30() {
                        }
                        function f31(a32) {
                            function F36(a38, a39) {
                                if (!new.target) { throw 'must be called with new'; }
                                String.prototype.concat.apply("function", []);
                            }
                            new F36();
                        }
                        Object.defineProperty(this, "e", { get: f30, set: f31 });
                        this.e = -1;
                    }
                    new F24();
                }
                f19();
                %OptimizeFunctionOnNextCall(f19);
            }
            new F15();
            new F15();
        }
        Object.defineProperty(this, "e", { get: a5, set: f13 });
        this.e = -1;
    }
    new F7();
}
new F2();
new F2();
