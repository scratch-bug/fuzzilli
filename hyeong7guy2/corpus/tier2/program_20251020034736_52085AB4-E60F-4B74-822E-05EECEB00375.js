class C0 {
}
function f2() {
    const v4 = [0.39346707945810944,-991803.8963643727];
    v4[15] |= 256;
    return v4;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        const t10 = "o";
        delete t10[C0];
        function f11(a12) {
            Array().forEach(f9);
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F16.constructor = f2;
            const t18 = F16.constructor;
            t18();
            return a12;
        }
        f11();
        f11(this);
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v25 = new F5(C0, f2);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
