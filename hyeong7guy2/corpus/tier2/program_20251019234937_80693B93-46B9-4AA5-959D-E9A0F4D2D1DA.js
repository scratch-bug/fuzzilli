function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return a3;
    }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12, a13, a14) {
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                function f22() {
                    return this;
                }
                function f23(a24) {
                    function f26(a27) {
                        return a27;
                    }
                    const v28 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
                    v28.reduceRight(F7);
                    v28.map(f26);
                    return v28;
                }
                Object.defineProperty(this, "e", { get: f22, set: f23 });
                this.e = this;
            }
            new F16(-1, this, a12, this);
            return f11;
        }
        f11(this, "HjvI", f5);
        f11(f11, F7, f11);
        %OptimizeFunctionOnNextCall(f11);
    }
    new F7();
    new F7(a4, F7);
    new F7();
}
new F0();
