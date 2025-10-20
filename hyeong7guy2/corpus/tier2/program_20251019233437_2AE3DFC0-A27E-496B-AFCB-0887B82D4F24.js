function f0() {
    const v2 = [0.39346707945810944,-991803.8963643727];
    v2[15] |= 256;
    return v2;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function F10(a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F10.constructor = f0;
            const v15 = F10.constructor;
            const v16 = v15(v15, f8, v15, this, F10);
            v16[15];
            v16[15];
            return F3;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v21 = new F3();
v21.toString(F3, f0);
