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
            F13.constructor = f0;
            const t14 = F13.constructor;
            t14();
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        function F22(a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F22.d >>>= 100000;
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v27 = new F3();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
