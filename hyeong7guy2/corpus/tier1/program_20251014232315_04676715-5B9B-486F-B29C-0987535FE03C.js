function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a14;
            }
            function f16(a17) {
                function f19(a20) {
                    return "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b";
                }
                ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match().map(f19);
                return a17;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        const v23 = new F9();
        return v23;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
