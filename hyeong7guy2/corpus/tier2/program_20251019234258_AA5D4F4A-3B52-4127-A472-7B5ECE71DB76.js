function f0() {
    const v2 = [0.39346707945810944,-991803.8963643727];
    v2[1] = v2;
    v2[15] |= 256;
    return f0;
}
let v3 = 2.2250738585072014e-308;
const v4 = v3++;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v13 = Array(v3);
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F14.constructor = f0;
            const t17 = F14.constructor;
            t17(f10, a11, v13);
            return v4;
        }
        f10(this);
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v23 = new F5();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
