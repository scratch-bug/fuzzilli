function f0() {
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return 256;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        e = f7;
        function f9(a10) {
            Array().forEach(f7);
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F14.constructor = f0;
            const t15 = F14.constructor;
            t15();
        }
        f9(F3);
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v23 = new F3(F3, F3);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
