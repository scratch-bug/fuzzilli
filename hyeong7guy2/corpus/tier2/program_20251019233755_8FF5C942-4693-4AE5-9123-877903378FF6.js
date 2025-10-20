function f0() {
    const v2 = [0.39346707945810944,-991803.8963643727];
    v2.d = v2;
    v2[15] |= 256;
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
            F13.constructor = f0;
            const t15 = F13.constructor;
            const v19 = t15();
            v19 - v19;
            return a5;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v23 = new F3();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
