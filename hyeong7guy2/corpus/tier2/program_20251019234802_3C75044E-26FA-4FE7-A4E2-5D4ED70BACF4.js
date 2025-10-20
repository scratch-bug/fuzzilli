function f1() {
    const v3 = [0.39346707945810944,-991803.8963643727];
    v3[15] |= 256;
    return v3;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            try { Array(9007199254740991); } catch (e) {}
            const v13 = Array();
            v13.forEach(f8);
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F15.constructor = f1;
            const t16 = F15.constructor;
            t16(v13);
            return a7;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v24 = new F4(f1, 9007199254740991);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
