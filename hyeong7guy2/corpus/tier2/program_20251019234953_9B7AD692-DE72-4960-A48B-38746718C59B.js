function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            class C7 {
            }
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                -2.2378445685972092e+307 >>> C7;
            }
            30349n <= 30349n;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
