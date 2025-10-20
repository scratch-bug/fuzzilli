function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return a2;
        }
        function f12(a13) {
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function f18(a19, a20, a21) {
                    function F23(a25, a26, a27, a28) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f29() {
                            return F5;
                        }
                        function f30(a31) {
                            function F33(a35, a36) {
                                if (!new.target) { throw 'must be called with new'; }
                                String.prototype.concat.apply("function", []);
                            }
                            new F33();
                            return this;
                        }
                        Object.defineProperty(this, "e", { get: f29, set: f30 });
                        this.e = -1;
                    }
                    new F23(this, F14, a13, a3);
                    return a19;
                }
                f18(F14, a17, F0);
                %OptimizeFunctionOnNextCall(f18);
            }
            new F14(this, a10);
            new F14();
            return a3;
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5(F0, a2, F0, F0);
}
new F0();
new F0(F0, F0);
