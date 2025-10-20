function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            ("bigint")["codePointAt"](...[-3.8678533966255084e+307,-1000000000.0,1.2255101421762765e+308,-1.7976931348623157e+308,-7.177388818269415e+307,-263.7402450972031,-4.0,2.0,2.2250738585072014e-308,1000.0], ..."codePointAt");
            new Uint8ClampedArray(268435441);
        }
        f6.apply(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
