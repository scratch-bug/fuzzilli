class C0 {
}
function f2() {
    C0 ^= -2147483647;
    const t3 = [0.39346707945810944,-991803.8963643727];
    t3[15] |= 256;
    return f2;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.constructor = f2;
            const t16 = F12.constructor;
            new t16();
            return C0;
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v21 = new F5();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
