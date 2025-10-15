function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v12 = new F8();
        class C13 {
            static [v12](a15, a16, a17) {
            }
        }
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            function f25() {
                return a23;
            }
            function f26(a27) {
                function f29(a30) {
                }
                ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(a7).map(f29);
                return C13;
            }
            Object.defineProperty(this, "e", { get: f25, set: f26 });
            this.e = -1;
        }
        new F19();
        return a6;
    }
    f4(f4, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v36 = new F0();
new F0(v36, v36);
