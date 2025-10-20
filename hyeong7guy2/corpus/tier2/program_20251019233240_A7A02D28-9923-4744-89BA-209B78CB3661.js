function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
            v10.join(v10, v10, f0, a7).localeCompare(f0, Array);
        }
        f6(f6);
        f6(f0);
        %OptimizeFunctionOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1(F1, F1);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
