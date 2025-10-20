function f0() {
    const v2 = [0.39346707945810944,-991803.8963643727];
    v2[15] |= 256;
    return v2;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array().forEach(f7);
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F13.constructor = f0;
            const t14 = F13.constructor;
            const v19 = t14();
            return -v19.push(f7, v19, f8, a5, f8);
        }
        f8(a5);
        f8(f7);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v24 = new F3(F3, F3);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
