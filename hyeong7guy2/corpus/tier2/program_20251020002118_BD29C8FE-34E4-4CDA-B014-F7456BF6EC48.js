function f0() {
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array().forEach(f7);
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let i20 = 0, i21 = 10; i21; i21--) {
            }
            F13.constructor = f0;
            const v27 = F13.constructor;
            v27(this, f0, f8, v27, a9);
        }
        f8(f8());
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v31 = new F3();
class C32 {
    static [v31](a34, a35, a36) {
    }
}
