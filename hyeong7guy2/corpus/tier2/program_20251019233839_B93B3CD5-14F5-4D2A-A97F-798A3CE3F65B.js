function f0() {
    const v2 = [0.39346707945810944,-991803.8963643727];
    const v3 = v2.flat();
    v3[0] = v3;
    v2[15] |= 256;
    return v2;
}
let v4 = 2.2250738585072014e-308;
const v5 = v4++;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v14 = Array(v4);
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F15.constructor = f0;
            const t18 = F15.constructor;
            t18(f11, a12, v14);
            return v5;
        }
        f11(f11(a8));
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v24 = new F6(v5, v4);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
