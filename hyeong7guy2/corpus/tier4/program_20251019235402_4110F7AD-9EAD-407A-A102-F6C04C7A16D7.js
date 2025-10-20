function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            for (const v15 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
                function F16(a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return F16;
            }
        }
        new F8();
        return f4;
    }
    f4(a2, a2, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = new F0(v22, v22);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    new F0(v23, a26);
}
new F24();
