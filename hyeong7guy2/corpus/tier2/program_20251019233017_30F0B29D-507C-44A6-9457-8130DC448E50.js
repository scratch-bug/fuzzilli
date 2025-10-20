function f0() {
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return 256;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array().forEach(f7);
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F13.name = F13;
            F13.constructor = f0;
            const t15 = F13.constructor;
            t15();
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v22 = new F3(F3, f0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
