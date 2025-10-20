function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            for (const v15 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
                class C16 {
                }
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return F17;
            }
        }
        new F8(f4, this, a3, a6);
        return F0;
    }
    f4(F0, F0, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
new F0(F0, v23);
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    new F0(F0, a27);
}
new F25();
