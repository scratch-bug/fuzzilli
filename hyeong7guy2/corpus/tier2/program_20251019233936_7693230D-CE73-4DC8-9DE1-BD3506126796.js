function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                function f18(a19, a20, a21) {
                    function F23(a25, a26) {
                        if (!new.target) { throw 'must be called with new'; }
                        String.prototype.concat.apply("function", []);
                    }
                    new F23();
                }
                f18();
                f18();
                f18();
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
